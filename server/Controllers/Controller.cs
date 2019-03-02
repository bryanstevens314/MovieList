using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("")]
    [ApiController]
    public class Controller : ControllerBase
    {
        // REDIRECT on no index.html
        [HttpGet]
        public void Redirect1()
        {
            Response.Redirect ("index.html");
        }
        //REDIRECT on no /
        [HttpGet("index.html")]
        public void Redirect2()
        {
            Response.Redirect ("https://myfavemovies.herokuapp.com /index.html");
        }
    }
}
