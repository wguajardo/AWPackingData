using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace WebLayer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Home/Publico.cshtml");
            //return Publico();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Publico()
        {
            return View();
        }

        [HttpPost]
        public JsonResult LogIn(String usuario, String password)
        {
            String mensaje = "";
            String codigo = "";

            try
            {
                if (usuario == "admin" && password == "admin")
                {
                    FormsAuthentication.SetAuthCookie(usuario, false);
                    mensaje = "Usuario y Password Correctos";
                    codigo = "1";
                }
                else
                {
                    mensaje = "Usuario y Password Incorrectos";
                    codigo = "-1";
                }

            }
            catch(Exception ex)
            {
                mensaje = ex.Message;
                codigo = "-1";
            }
           
           

            return Json(new
            {
                Codigo = codigo,
                Mensaje = mensaje
                }, JsonRequestBehavior.AllowGet);
        }
    }
}