using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using QC = System.Data.SqlClient;
using DT = System.Data;
using System.Data;
using System.Web;
using Microsoft.AspNetCore.Http;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectionsController : ControllerBase
    {
        // GET api/collections/:{userId}
        [HttpGet("{userId}")]
        public ActionResult<string> Get(int id)
        {
            try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    using (var command = new QC.SqlCommand()){
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText = @"SELECT * FROM User_Movies WHERE uid = " + id + ";";
                        QC.SqlDataReader reader = command.ExecuteReader();
                        while (reader.Read()){

                        }
                        return reader.GetInt32(0) + " " + reader.GetString(1) + " " + reader.GetString(2) + " " + reader.GetString(3);
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }

        //POST api/collections
        [HttpPost]
        public string PostJsonString([FromBody] string list_name)
        {
                 Console.WriteLine("Hello World!" + list_name);
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
                        command.CommandText = @"INSERT INTO User_Movies (list_name, uid) OUTPUT INSERTED.Id VALUES (@list_name, @uid);";

                        parameter = new QC.SqlParameter("@list_name", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = list_name;
                        command.Parameters.Add(parameter);

                        var uid = HttpContext.Session.GetString("uid");
                        parameter = new QC.SqlParameter("@uid", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = uid;
                        command.Parameters.Add(parameter);

                        int collectionId = (int)command.ExecuteScalar();
                        Console.WriteLine("The generated collectionId = {0}.", collectionId);
                        return collectionId.ToString();
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
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
                        command.CommandText = @"DELETE FROM User_Movies WHERE id = " + id + ";";
                        command.ExecuteNonQuery();
                        return "";
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }
    }
}
