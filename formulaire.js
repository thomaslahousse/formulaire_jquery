$(document).ready(function() {
	$('form').on("submit", function(){
	nom = $("#fnom").val()
	prenom = $("#fprenom").val()
	email = $("#femail").val()
	birthday= $("#fbirthday").val()
	regexemail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
	regexbirthday = /^[0-9]+$/;

  if( nom == ""){
         $("#fnom").css('background','red');
  }
	if( prenom == ""){
		  $("#fprenom").css('background','red');
	}
	if( email == ""){
			$("#femail").css('background','red');
	}
	if( birthday == "" || (birthday.length < 8)){
			$("#fbirthday").css('background','red');
	}

	if( nom != ""){
				 $("#fnom").css('background','white');
	}
	if( prenom != ""){
			$("#fprenom").css('background','white');
	}
	if( regexemail.test(email)){
			$("#femail").css('background','white');
	}
	if( regexbirthday.test(birthday) && (birthday.length == 8)){
			$("#fbirthday").css('background','white');
	}
	return false
})
});
