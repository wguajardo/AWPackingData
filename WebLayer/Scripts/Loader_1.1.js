
Loader = {

	context: this,

	init: function () {
		var context = this;
		//alert(1234);


	},

	Visible: function (elemento) {
		$(elemento).show();
	},

	NoVisible: function (elemento) {
		$(elemento).hide();
	},

	SeteaMensajeCorrecto: function (elemento, mensaje) {
		$(elemento).html(mensaje);
		$(elemento).addClass('alert alert-success');
	},

	SeteaMensajeIncorrecto: function (elemento, mensaje) {
		$(elemento).html(mensaje);
		$(elemento).addClass('alert alert-danger');
	}


}