$(".intro-toggler").click(function() {
	$(".expanded-intro").slideToggle("600");
	$(this).hide();
});

$(".less").click(function() {
	$(".expanded-intro").slideToggle("600");
	$(".intro-toggler").show("600");
});

$("#about a").click(function() {
	$(".expanded-intro").show("600");
	$(".intro-toggler").hide();
	$("#about").addClass("current");
	$('html, body').animate({
         scrollTop: $("#about-md").offset().top -100 }, 2000);
});

$(".view-past a").click(function() {
	$('body, html').animate({
         scrollTop: $("#past-events").offset().top }, 500);
});

$('.back-to-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0 }, 500);
			return false;
});

$(".prev-participant")
.on( "mouseenter", function() {
  $(this).css({
    "width": "auto"
  });
  $(this).children("a").show(600);
})
.on( "mouseleave", function() {
  var styles = {
    width : "30px"
  };
  $(this).css( styles );
  $(this).children("a").hide(600);
});

$(".next-participant")
.on( "mouseenter", function() {
  $(this).css({
    "width": "auto"
  });
  $(this).children("a").show(600);
})
.on( "mouseleave", function() {
  var styles = {
    width : "30px"
  };
  $(this).css( styles );
  $(this).children("a").hide(600);
});

var $containter = $('#news-container');
	$containter.imagesLoaded( function(){
		$containter.masonry({
			itemSelector: '.news-block',
        	isAnimated: !Modernizr.csstransitions,
        	isFitWidth: true
		});	
	});