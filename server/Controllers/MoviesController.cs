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
    public class MoviesController : ControllerBase
    {

        // GET api/movies/search/:{search}
        [HttpGet("search/{search}")]
        public ActionResult<string> Get(string search)
        {
            try {

                return "";
            }catch(Exception ex){

                Console.WriteLine("An error occured: " + ex.Message);
                return ex.Message;

            }
        }

    }
}