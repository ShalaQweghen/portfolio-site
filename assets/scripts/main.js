$(document).ready(function() {
	toggleNav();
	$("#about-button").addClass("clicked");
	$("#about-button, #portfolio-button, #contact-button").on("click", clicked);
	$(".navs").on("click", toggleNav);
	$(window).on("resize", toggleNav);
});

function clicked() {
	$("#about-button, #portfolio-button, #contact-button").removeClass("clicked");
	$(this).addClass("clicked");
};

function toggleNav() {
	var width = $(window).width();
	if (width <= 752) {
		$("nav").removeClass().addClass("navs");
		$(".nav-links").removeClass("hide").addClass("hide");
		$(".navs").on("click", function() {
			$(".hide").toggle();
		});
	}
	else if (width > 752) {
		$("nav").removeClass();
		$(".nav-links").removeClass("hide");
		$(".nav-links").css("display", "block");
	}
};