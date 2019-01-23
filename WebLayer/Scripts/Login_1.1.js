
Login = {


    context: this,

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
                //context.GetLogin(username, password);
                var context_loader = Loader;
                context_loader.Visible("#cargando");
                context_loader.NoVisible("#login-form");
            }
        });
    }
}