`use strict`
//apikey google maps AIzaSyBokd6gtQdZ883WKlFfDk7wWlMAVYxc3-0

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  var latitud,longitud;
  var funcionExito = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    var miUbicacion = new mapIcons.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map,
      icon: {
        path: mapIcons.shapes.MAP_PIN,
        fillColor: 'teal',
        fillOpacity: 1,
        strokeColor: '',
        strokeWeight: 0
      },
      map_icon_label: '<span class="map-icon map-icon-bicycle-store"></span>'
    });
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
    }
}


/*$(document).ready(function(){
  $('#btnSearch').click(function(){
    //let entityid = Number($('#cityid').val());
  let entityid = $('#inputSearch').val();
    let url = "https://developers.zomato.com/api/v2.1/search?entity_type=city&apikey=d79b356002229fc294e09c308a4c8643&entity_id="+entityid;
    $.getJSON(url, function(answer){
      console.log(answer);
 
});
  });
});*/

  /*$.each(answer.restaurants, function(key,value){
        let id = value.restaurant.R.res_id;
        let name = value.restaurant.name;
        let location = value.restaurant.location.address;
        let image = value.restaurant.featured_image;
        let rating = value.restaurant.user_rating.aggregate_rating;
        //$("div").append(image+ "Restaurant Id:" + id+",Name: "+name + ",Location:"+location+"<br/>");
        let code = "<div class='ui card'><div class='image'><img src="+image+" alt='Restaurant' /></div><div class='content'><div class='header'>"+id+":"+name+"</div><div class='description'>"+location+"</div></div><div class='extra content'><a><i class='location Smile icon'></i>"+rating+"</a></div></div>";
        $('#restaurant-container').append(code);
      });
    });*/
  




/*
var myUrl = 'https://developers.zomato.com/api/v2.1/search';
var key = 'd79b356002229fc294e09c308a4c8643';
var cityCode = ['83','73','66','97','257','280'];
$('#inputSearch').click(function(){
  const search = $('#inputSearch').val();
  $.ajax({
    url: myUrl,
    type: 'GET',
    datatype: 'json'
  })
  .done(response)
  .fail(error);
  function response(data) {
  }
  function error(){
    alert('Ha ocurrido un error')
  }
});*/

  /*cityCode.forEach(function(el){
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
  });*/
/*
$(document).ready(function(){
  $('#signUp').hide();
  $('.signUp').click(function(){
    $('#signUp').show();
    $('#welcome').hide();
  })
});
*/