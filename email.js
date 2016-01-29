function getEmail() {
	setTimeout(function () {
		var emailDiv = document.querySelector (".cdc-inbox-userinfo-box-inner-email  > :first-child")
		var email = document.querySelector (".cdc-inbox-userinfo-box-inner-email  > :first-child").innerHTML
		$.ajax({
		  type: "GET",
		  url: "https://ongair.im/api/v2/stats/user?email=" + email,
		  dataType: 'json',
		  success: function(data, textStatus, jqXhr) {
		  	// showIfEmailIsRegistered(document.querySelector (".cdc-inbox-userinfo-box-inner-email  > :first-child"), data)
		  	if (data.exists) {
		  		emailDiv.innerHTML = email + " | <span style='color: green;'>YES</span>"
		  	} else{
		  		emailDiv.innerHTML = email + " | <span style='color: red;'>NO</span>"
		  	};
		    console.log(data);
		  },
		  error: function (request, status, error) {
		    console.log(request.responseText);
		  }
		});
        console.log(email)
    }, 500);	
}

window.addEventListener ("load", checkEmail, false);

function checkEmail (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 15000);

    function checkForJS_Finish () {
        if (document.querySelector (".cdc-inbox-userinfo-box-inner-email  > :first-child") != null) {
	            clearInterval (jsInitChecktimer);
	            getEmail();

	            var elements = document.getElementsByClassName("cdc-inbox-list-items-item-button");

	            for (var i = 0; i < elements.length; i++) {
	                elements[i].addEventListener('click', getEmail, false);
	            }
        }
    }
}
