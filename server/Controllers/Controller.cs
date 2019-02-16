﻿using System;
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
        // GET api/values
        [HttpGet]
        public void Get()
        {
            Response.Redirect ("index.html");
        }
    }
}
