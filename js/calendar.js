'use strict';

$(document).ready(function (){
    if( navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/BlackBerry/)
     ){
    $('.calandar').css("display:none")
    } else {

        $('.agenda').css("display:block")
        }

});
