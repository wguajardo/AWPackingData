using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebLayer.Controllers
{
    [Authorize]
    public class InternalController : Controller
    {
        // GET: Internal
        public ActionResult Index()
        {
            return View("~/Views/Internal/Test.cshtml");
        }
    }
}