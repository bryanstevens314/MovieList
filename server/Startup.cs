using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using System.Data;
// using MySql.Data;
// using MySql.Data.MySqlClient;

namespace server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {

            Configuration = configuration;
            try{
                using(SqlConnection conn = new SqlConnection())
                {
                    conn.ConnectionString = "Server=65.52.125.99;Database=SQLdatabase;Uid=admin123;Pwd=Password123456789; Trusted_Connection=true";
                    Console.WriteLine("Something went right");
                }
            }
            catch{
                Console.WriteLine("Something went wrong1");
            }
            // try{
            //     using (SqlConnection connection = new SqlConnection(
            //     "Integrated Security=SSPI;Initial Catalog=Northwind"))
            //     {
            //         connection.Open();
            //         // Pool A is created.
            //     }
            // }
            // catch{

            // }

            // try{
            //     using (SqlConnection connection = new SqlConnection(
            //     "Integrated Security=SSPI;Initial Catalog=pubs"))
            //     {
            //         connection.Open();
            //         // Pool B is created because the connection strings differ.
            //     }
            // }
            // catch{

            // }

            // try{
            //     using (SqlConnection connection = new SqlConnection(
            //     "Integrated Security=SSPI;Initial Catalog=Northwind"))
            //     {
            //         connection.Open();
            //         // The connection string matches pool A.
            //     }
            // }
            // catch{

            // }
        }


        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), "../dist/MovieList")),
                RequestPath = ""
            });
            app.UseHttpsRedirection();
            app.UseMvc();

            // using (SqlConnection connection = new SqlConnection(
            // "Integrated Security=SSPI;Initial Catalog=Northwind"))
            // {
            //     connection.Open();
            //     // Pool A is created.
            // }

            // using (SqlConnection connection = new SqlConnection(
            // "Integrated Security=SSPI;Initial Catalog=pubs"))
            // {
            //     connection.Open();
            //     // Pool B is created because the connection strings differ.
            // }

            // using (SqlConnection connection = new SqlConnection(
            // "Integrated Security=SSPI;Initial Catalog=Northwind"))
            // {
            //     connection.Open();
            //     // The connection string matches pool A.
            // }
        }
    }
}
