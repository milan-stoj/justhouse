$( document ).ready(function() {

    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('#navLinks').css({'right': '0px'})
        ) : (
            $('#navLinks').css({'right':'-200px'})
        );
    });

    $('nav a[href*="#"]').on('click', function (){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500);
    });

    $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

var $content = $('header .content')
  , $bw    = $('header .overlay')
  , $header  = $('header')
  , $logo = $('header img')
  , wHeight  = $(window).height();


$(window).on('resize', function(){
  wHeight = $(window).height();
});

window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
}

Scroller.prototype = {
 
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },


  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  
  requestTick: function() {
    if( !this.ticking ) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking       = false;
    var slowScroll = currentScrollY / 2
      , blurScroll = currentScrollY * 2
      , opaScroll = 2.0 - currentScrollY / 200;

    //   if ($(window).scrollTop() > 300) {
    //     $('nav').addClass('sticky');
    // } else {
    //     $('nav').removeClass('sticky');
    // }
    
    $header.css({
      'opacity' : opaScroll / 2 
    });

  }
};


var scroller = new Scroller();  
scroller.init();

});
