(function($){
	'use strict';

	var doc = document,
			win = window


	$(doc).ready(function() {

		if ($('.owl-option-02').size() > 0) {
			$('.owl-option-02').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				dots: false,
				nav:true,
				responsive:{
					0:{
						items:2
					},
					360:{
						items:3
					},
					480:{
						items:4
					},
					767:{
						items:5
					}
				}
			});
		}

	});

})(jQuery);
