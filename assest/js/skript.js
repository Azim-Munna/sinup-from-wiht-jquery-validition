(function($) {
    "use strict"

$("#user_name_er").hide();
$("#pass_error").hide();
$("#re_pass_error").hide();
$("#email_error").hide();

var u_s_eror=false;
var p_s_error=false;
var re_p_s_error=false;
var e_s_error=false;
// user error
$("#user_name").focusout(function(){
    // alert("test");
    check_username();
});
function check_username(){
    var user_length=$("#user_name").val().length;
    if(user_length<5 || user_length>20){
       $("#user_name_er").html("should be between 5-20 charecters"); 
       $("#user_name_er").show();
       u_s_eror=true;
    }else{
        $("#user_name_er").hide();
    }
}
// pass error
$("#password").focusout(function(){
    check_password();
});

function check_password(){
    var pass_length=$("#password").val().length;
    if(pass_length<8){
        $("#pass_error").html("al last 8 charecters");
        $("#pass_error").show();
        p_s_error=true;
    }else{
        $("#pass_error").hide();
    }
}
// re pass check 
$("#re_pass").focusout(function(){
    ceck_re_pass();
});
function ceck_re_pass(){
    var re_pass_length=$("#re_pass").val().length;
    var pass_length=$("#password").val().length;
    if(pass_length != re_pass_length){
        $("#re_pass_error").html("password don't match");
        $("#re_pass_error").show();
        re_p_s_error=true
    }else{
        $("#re_pass_error").hide();

    }

}
// check email
$("#u_email").focusout(function(){
    check_email();
});
function check_email(){
    var patten=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var email_val=$("#u_email").val();
    // console.log(email_val);
    if(patten.test(email_val)){
        $("#email_error").hide();
    }else{
        $("#email_error").html("invalid email");
        $("#email_error").show();
        e_s_error=true;
    }
}
$("form").submit(function(){
     check_username();
     check_password();
     ceck_re_pass();
     check_email();
     console.log("hi sumbit");
     if(u_s_eror==false && p_s_error==false && re_p_s_error==false && e_s_error==false ){
       return true;
     }else{
        return false;
     }
});

})(jQuery);
