$(function(){
	 $(window).scroll(function () {
    var anis = $(this).scrollTop();
    if (anis>480) {
      $('.navbar').addClass('header-bg');
    } else {
      $('.navbar').removeClass('header-bg');
    }
  });



 $('#banner').slick({
  
		arrows:false,
		
		slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:2000,
});
	
	
	
	$('.carousel-inner').slick({
  
		arrows:false,
		
		slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:2000,
});



	
 var containerEl = document.querySelector('.gal-mix');

            var mixer = mixitup(containerEl); 
	
	





















});