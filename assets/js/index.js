`use strict`

var myUrl = 'https://developers.zomato.com/api/v2.1/search';
var key = 'd79b356002229fc294e09c308a4c8643';
var cityCode = ['83','73','66','97','257','280'];

$('#option-santiago').click(function(){
  cityCode.forEach(function(el){
    $.ajax({
      url: myUrl,
      type: 'GET',
      dataType: 'json',
      data: {
      entity_type : 'city',
        entity_id : el
      },
      beforeSend: function(request) {
        request.setRequestHeader("user-key", key);
      }

    })
    .done(function(res){
      res.restaurants.forEach(function(el){
        var name = el.restaurant.name;
        var img = el.restaurant.thumb;
        var city = el.restaurant.location.city;
        var cityId = el.restaurant.location.city_id;
    

    
      });
    })
    
});

  });


$(document).ready(function(){
  $('#signUp').hide();
  $('.signUp').click(function(){
    $('#signUp').show();
    $('#welcome').hide();
  })
});
