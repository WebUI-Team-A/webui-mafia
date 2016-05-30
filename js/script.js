/*Animation of main page*/

$(document).ready(function() {
   $(".animsition").animsition({
      inClass: 'fade-in-up',
      outClass: 'fade-out-up',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
  });
});

/*Smooth scroll*/

$(document).ready(function() {
	$('a[href^="#"]').click(function(){
	   var el = $(this).attr('href');
	$('body').animate({
		scrollTop: $(el).offset().top}, 2000);
	return false;
	});
});
 
/****Google Map****/

var myCenter=new google.maps.LatLng(48.922443, 24.710182);
var marker;

function initialize() {
   var mapProp = {
      center:myCenter,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
};

   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

   var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.DROP
   });

   marker.setMap(map);

   var infowindow = new google.maps.InfoWindow({
      content:"Our Office"
   });

   google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
   });
}
google.maps.event.addDomListener(window, 'load', initialize);
