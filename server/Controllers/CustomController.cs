
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            try{
                using(SqlConnection conn = new SqlConnection())
                {
                    conn.ConnectionString = conn.ConnectionString = "Server=65.52.125.99;Database=SQLdatabase;Uid=admin123;Pwd=Password123456789; Trusted_Connection=true";
                    conn.Open();
                    SqlCommand command = new SqlCommand("SELECT * FROM table", conn);
                    // Create new SqlDataReader object and read data from the command.
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        // while there is another record present
                        while (reader.Read())
                        {
                            // write the data on to the screen
                            Console.WriteLine(String.Format("{0} \t | {1} \t | {2} \t | {3}",
                            // call the objects from their index
                            reader[0], reader[1], reader[2], reader[3]));
                        }
                    }
                    // use the connection here
                }
            }
            catch{
                Console.WriteLine("Something went wrong");
            }
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
            // SqlCommand insertCommand = new SqlCommand("INSERT INTO TableName (FirstColumn, SecondColumn, ThirdColumn, ForthColumn) VALUES (@0, @1, @2, @3)", conn);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
