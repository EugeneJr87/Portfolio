
// closing navbar on click -- since it stays open on its own //
$(document).on('click',function(){
$('.collapse').collapse('hide');
})


//Smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing')
	});
});



// Changing the color of the navbar when scrolled
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');
    
    if (scrollPos > 20) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});
