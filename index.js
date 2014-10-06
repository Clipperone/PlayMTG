'use strict';
$(document).ready(function() {
  $("#register2").click(registerShow);
  $("#register").click(register);
  $("#login2").click(loginShow);
  $("#login").click(login);
  $("#loginForm").show();
});

var registerShow = function() {
  $("#loginForm").hide();
  $("#registerForm").show();
},

loginShow = function() {
  $("#loginForm").show();
  $("#registerForm").hide();
},

register = function() {
  $.ajax({
    type: "POST",
    url: "services/register.php",
    data: $("#registerForm").serialize(),
    success: function(data){
      console.debug('chiamato');
      alert(data);
    },
    dataType: 'json'
  });
},

login = function() {
  
};
