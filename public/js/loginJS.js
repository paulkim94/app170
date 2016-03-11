$(document).ready(function(){
    $('#loginBtn').click(function(e) {
      var userEmail = $("#email").val();
      var userPassword = $("#password").val();

      if(userEmail == "" || userPassword == "") {
        alert("Please enter an email and password");
      }
      else {
        $("#loginBtn").attr("href", "/dashboard");
      }
    });

    $('#submitBtn').click(function(e) {
      var userEmail = $("#email").val();
      var userPassword = $("#password").val();

      if(userEmail == "" || userPassword == "") {
        alert("Please enter an email and password");
        $("#loginForm").removeAttr("action"); // remove if problems occur
      }
      else {
        alert('Thanks for signing up! Let\'s get you started with Piggy.');
      }
    });

    $('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');

			inputs.attr("disabled", "disabled");

			button.hide();

			progress.show();

			progressBar.animate({width : "100%"}, 100);

			progress.delay(1000)
					.fadeOut(600);

			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1600)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");

	});
});
