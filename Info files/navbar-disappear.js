// Navbar Hides When Scrolling 

 (function ($) {
  $(document).ready(function(){

	$('.navbar').hover (

	);

	// fadeOut the navbar
	$(function () {
		$(window).scroll(function () {
            // scrolling distance before navbar fadeOut

			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeOut();
			}
			else {
				$('.navbar').fadeIn();
			}

		});

	});

});
  }(jQuery));
