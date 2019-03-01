using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QC = System.Data.SqlClient;
using DT = System.Data;
using System.Data;
using System.Configuration;
using System.Web;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Text;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        public static object[] GenerateHash(string pass)
        {
            // 128-bit salt using a secure PRNG
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            // 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: pass,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            object[] result = new object[2];
            result[0] = hashed;
            result[1] = Convert.ToBase64String(salt);
            return result;
        }
        public static bool VerifyHash(string CurrentPass, string HashedPass, string Salt)
        {
            // 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: CurrentPass,
                salt: Convert.FromBase64String(Salt),
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                 numBytesRequested: 256 / 8));
            if(hashed == HashedPass){
                return true;
            }
            return false;
        }

        // GET api/users
        [HttpGet]
        public ActionResult<bool> Get()
        {
            try {
                string uid = HttpContext.Session.GetString("uid");
                Console.WriteLine("Hello User " + uid + " " + uid.GetType());
                if(uid != ""){
                    return true;
                }
                else{
                    return false;
                }
            }catch (Exception ex) {
                Console.WriteLine("An error occured: " + ex.Message);
                return false;
            }
        }

        // POST api/users/verify
        [HttpPost("verify")]
        public ActionResult<bool> VerifyPost([FromBody] string value)
        {
            try {

                return VerifyUser (value);

            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return false;

            }

        }
        public bool VerifyUser(string value){
            using (var connection = new QC.SqlConnection(
                "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
                ))
            {
                connection.Open();
                using (var command = new QC.SqlCommand()){
                    string[] tokens = value.Split('?');
                    string mail = tokens[0];
                    string pass = tokens[1];
                    command.Connection = connection;
                    command.CommandType = DT.CommandType.Text;
                    command.CommandText =
                    @"
                        SELECT * FROM Users WHERE umail = @umail;
                    ";
                    command.Parameters.AddWithValue("@umail", mail);
                    QC.SqlDataReader reader = command.ExecuteReader();
                    bool result = false;
                    while (reader.Read())
                        {
                            int current_uid = reader.GetInt32(0);
                            string current_umail = reader.GetString(1);
                            string current_upass = reader.GetString(2);
                            string current_usalt = reader.GetString(3);
                            result = VerifyHash(pass, current_upass,current_usalt);
                            HttpContext.Session.SetString("uid", current_uid.ToString());
                        }
                    return result;
                }
            }
        }
        // POST api/users
        [HttpPost]
        public ActionResult<bool> CreatePost([FromBody] string value)
        {
             try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    using (var command = new QC.SqlCommand())
                    {
                        string[] tokens = value.Split('?');
                        object[] hashed = GenerateHash(tokens[1]);
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText =
                        @"
                            INSERT INTO Users (umail, upass, usalt)
                            OUTPUT INSERTED.Id
                            VALUES (@umail,@upass,@usalt);
                        ";
                        command.Parameters.AddWithValue("@umail", tokens[0]);
                        command.Parameters.AddWithValue("@upass", hashed[0]);
                        command.Parameters.AddWithValue("@usalt", hashed[1]);
                        int uid = (int)command.ExecuteScalar();
                        HttpContext.Session.SetString("uid", uid.ToString());

                        return true;
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return false;
            }
        }

        // DELETE api/users
        [HttpDelete]
        public void Delete()
        {
            try {
                HttpContext.Session.SetString("uid", "");
            }catch (Exception ex) {
                Console.WriteLine("An error occured: " + ex.Message);
            }
        }
    }
}
