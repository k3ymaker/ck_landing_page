$(document).ready(function() {

	var main = (function() {
		return {
			vars: {
                windowWidth: $(window).width(),
                mobile: ( $(window).width() < 992 ),
            },
			init: function() {
				this.initFeatures();
				this.initServices();
			},
			initFeatures: function() {
				var that = this;

				// Navbar toggle
				$('.navbar-toggle').click(function() {
					$('nav').toggleClass('active');
				});

				// Navbar link click
				$('#navbar a').click(function(e) {
					e.preventDefault();

					var target = $(this).attr('href');

					$('html, body').stop().animate({
			            scrollTop: ($(target).offset().top)
			        }, 1250);
				});
				
			},
			initServices: function() {
				var that = this;

				// Change de service
				$('#our-services ul li').click(function() {

					var target = $(this).data('target');

					// Highlight current on menu
					$('#our-services ul li').removeClass('active');
					$(this).addClass('active');

					// Activate the service
					$('.service-item').removeClass('active');
					$('#services-wrap ' + target).addClass('active');

					that.initServiceCarousel();

				});

				//Init carousel on load
				that.initServiceCarousel();

				// On thumb click, change slide
				$('.service-carrousel .thumb').click(function() {
					// Get current slide
					var entity = $('.service-item.active .service-carrousel'),
						slide = $(this).data('slide');

					entity.slick('slickGoTo', slide);

					// Change slide 
					$('.service-item.active .main-images .image').removeClass('active');
					$('.service-item.active .main-images .image-' + slide).addClass('active');
				});

				// On change carousel, change slide 
				$('.service-carrousel').on('afterChange', function(slick, currentSlide){
					var slide = currentSlide.currentSlide;

					// Change slide 
					$('.service-item.active .main-images .image').removeClass('active');
					$('.service-item.active .main-images .image-' + slide).addClass('active');
				});


			},
			initServiceCarousel: function() {
				var that = this;

				// Init the carousel
				$('.service-item.active .service-carrousel').slick({
					dots: true,
					infinite: false,
					speed: 300,
					slidesToShow: 1,
					//centerMode: true,
					variableWidth: true,
					arrows: false,
					useTransform: false,
				});
			}
		}
	})();

	main.init();
});