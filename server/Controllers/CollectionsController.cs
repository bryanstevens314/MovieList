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
        public ActionResult<string> Get()
        {
            try {

                return RetrieveCollections();

            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }
        public string RetrieveCollections(){
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
                        string temp = "";
                        while (reader.Read()){
                            if(temp != ""){
                                temp += ",";
                            }
                            string list_name = reader.GetString(0);
                            string imdbID = reader.GetString(1);
                            temp += "\"" + list_name + "\":\"" + imdbID + "\"";
                        }
                        return "{" + temp + "}";
                    }
                }
        }
        //POST api/collections
        [HttpPost]
        public bool Post([FromBody] string payload)
        {
            try {
                string[] collections = payload.Split(",");
                foreach(string coll in collections){
                    string[] movies = coll.Split(":");
                    InsertIntoUser_Movies(movies);

                }
                return true;
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return false;

            }
        }

        public void InsertIntoUser_Movies (string[] payload){
                using (var connection = new QC.SqlConnection(
                    "Server=tcp:moviedbserved.database.windows.net,1433;Initial Catalog=db;Persist Security Info=False;User ID=admin123;Password=Password123456789;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
                {
                    connection.Open();
                    using (var command = new QC.SqlCommand())
                    {
                        command.Connection = connection;
                        command.CommandType = DT.CommandType.Text;
                        command.CommandText =
                        @"
                            INSERT INTO User_Movies (list_name, uid, imdbID)
                            VALUES (@list_name, @uid, @imdbID);
                        ";
                        string uid = HttpContext.Session.GetString("uid");
                        command.Parameters.AddWithValue("@list_name", payload[0]);
                        command.Parameters.AddWithValue("@imdbID", payload[1]);
                        command.Parameters.AddWithValue("@uid", uid);
                        command.ExecuteScalar();
                    }
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
