using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QC = System.Data.SqlClient;
using DT = System.Data;
using System.Data;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        // GET api/users/:{id}
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
                    ))
                {
                    connection.Open();
                    using (var command = new QC.SqlCommand()){

                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText = @"SELECT * FROM Users WHERE id = " + id + ";";
                        QC.SqlDataReader reader = command.ExecuteReader();
                            return reader.GetInt32(0) + " " + reader.GetString(1) + " " + reader.GetString(2) + " " + reader.GetString(3);
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }

        // POST api/values
        [HttpPost]
        public ActionResult<string> Post([FromBody] string value)
        {
             try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    QC.SqlParameter parameter;
                    using (var command = new QC.SqlCommand())
                    {
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText = @"INSERT INTO Users (umail, upass, uname) OUTPUT INSERTED.id VALUES (@umail,@upass,@uname);";

                        parameter = new QC.SqlParameter("@umail", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = "bryan_stevens314@yahoo.com";
                        command.Parameters.Add(parameter);

                        parameter = new QC.SqlParameter("@upass", DT.SqlDbType.NVarChar, 25);
                        parameter.Value = "123";
                        command.Parameters.Add(parameter);

                        parameter = new QC.SqlParameter("@uname", DT.SqlDbType.NVarChar, 25);
                        parameter.Value = "Bryan Stevens";
                        command.Parameters.Add(parameter);

                        int productId = (int)command.ExecuteScalar();
                        Console.WriteLine("The generated ProductID = {0}.", productId);
                        return productId.ToString();
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
