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
        // GET api/collections
        [HttpGet]
        public ActionResult<string> Get(int id)
        {
            Console.WriteLine("HELLO GET");
            try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    using (var command = new QC.SqlCommand()){
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText =
                        @"
                            SELECT list_name, STRING_AGG(imdbID, ',') AS imdbIDs FROM User_Movies
                            WHERE uid = @uid
                            GROUP BY list_name
                            ORDER BY list_name DESC;
                        ";
                        string uid = HttpContext.Session.GetString("uid");
                        command.Parameters.AddWithValue("@uid", uid);
                        QC.SqlDataReader reader = command.ExecuteReader();
                        Console.WriteLine("EXECUTING COMMAND " + uid);
                        string temp = "";
                        while (reader.Read()){
                            if(temp != ""){
                                temp += ",";
                            }
                            Console.WriteLine("Reader " + reader);
                            string list_name = reader.GetString(0);
                            string imdbID = reader.GetString(1);
                            temp += "\"" + list_name + "\":\"" + imdbID + "\"";
                        }
                        return "{" + temp + "}";
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }

        //POST api/collections
        [HttpPost]
        public bool Post([FromBody] string list_name)
        {
            Console.WriteLine("HELLO COLLECTION");
             try {
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    Console.WriteLine("OPENING CONNECTION");
                    QC.SqlParameter parameter;
                    using (var command = new QC.SqlCommand())
                    {
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText = @"INSERT INTO User_Movies (list_name, uid, imdbID) VALUES (@list_name, @uid, @imdbID);";

                        parameter = new QC.SqlParameter("@list_name", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = list_name;
                        command.Parameters.Add(parameter);

                        parameter = new QC.SqlParameter("@imdbID", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = "";
                        command.Parameters.Add(parameter);

                        string uid = HttpContext.Session.GetString("uid");
                        parameter = new QC.SqlParameter("@uid", DT.SqlDbType.NVarChar, 50);
                        parameter.Value = uid;
                        command.Parameters.Add(parameter);

                        command.ExecuteScalar();
                        return true;
                    }
                }
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return false;
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
