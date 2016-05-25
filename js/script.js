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

