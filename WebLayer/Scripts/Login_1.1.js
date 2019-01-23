
Login = {


    context: this,

    //Urls
    urlLogin: "Home/LogIn",

    init: function () {
        var context = this;
        context.EventosBotones();
        var context_loader = Loader;
        context_loader.NoVisible("#cargando");
    },

    EventosBotones: function () {
        var context = this;


        $('body').keyup(function (e) {
            e.preventDefault();
            if (e.keyCode == 13) {

                var username = $("#username").val();
                var password = $("#password").val();
                context.GetLogin(username, password);
               
            }
        });

        $('#entrar_login').on('click', function (e) {
            e.preventDefault();
            var username = $("#username").val();
            var password = $("#password").val();
            context.GetLogin(username, password);
        });
    },

    GetLogin: function (username, password) {
        var context = this;
        var contex_loader = Loader;

        if (username == '' || password == '') {
            //alert("Usuario y password no pueden estar en blanco.");
            contex_loader.SeteaMensajeIncorrecto("#mensajes", "<label>Error</label> - Usuario y password no pueden estar en blanco.");
            contex_loader.Visible("#mensajes");
            return false;
        }

        $.ajax({
            url: context.urlLogin,
            //contentType: "application/json; charset=utf-8",
            type: 'POST',
            dataType: 'json',
            data: { usuario: username, password: password },
            beforeSend: function () {
                //contex_loader.Visible("#cargando");
                //contex_loader.NoVisible("#mensajes");
                contex_loader.Visible("#cargando");
                contex_loader.NoVisible("#login-form");
                contex_loader.NoVisible("#mensajes");
                $("#entrar_login").attr("disabled", true);
            },
            success: function (ret) {
                console.log("Respuesta Success: " + ret.Mensaje);
                if (ret.Codigo == "-1")
                {
                    contex_loader.SeteaMensajeIncorrecto("#mensajes", "<label>Error</label> - Usuario o clave incorrectos");
                    contex_loader.Visible("#mensajes");
                }
                else
                {
                    //contex_loader.SeteaMensajeCorrecto("#mensajes", "<label>Error</label> - " + ret.Mensaje);
                    //contex_loader.Visible("#mensajes");
                    window.location.href = "Internal";
                }

                /*if (!ret.mensajeLog) {
                    contex_loader.SeteaMensajeIncorrecto("#mensajes", "<label>Error</label> - Usuario o clave incorrectos");
                    contex_loader.Visible("#mensajes");
                } else {
                    window.location.href = "views/Home.jsp";
                }*/

                contex_loader.NoVisible("#cargando");
                contex_loader.Visible("#login-form");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //debugger;
                console.log("Error lOGIN: " + errorThrown);
                contex_loader.NoVisible("#cargando");
            }, complete: function () {
                $("#entrar_login").attr("disabled", false);
                contex_loader.NoVisible("#cargando");
            },
        });

    }


}