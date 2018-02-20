`use strict`

var myUrl = 'https://developers.zomato.com/api/v2.1/search';
var key = 'd79b356002229fc294e09c308a4c8643';
var cityCode = ['83','73','66','97','257','280'];


$(document).ready(function(){
  $('#signUp').hide();
  $('.signUp').click(function(){
    $('#signUp').show();
    $('#welcome').hide();
  })
});