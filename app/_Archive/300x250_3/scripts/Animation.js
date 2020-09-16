var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.from(hero, .75, {x:'-=300', ease: Sine.easeIn})
		.from(overlay1, .75, {y:"-250", ease: Sine.easeIn})
		.from(overlay2, .75, {y:"-250", ease: Sine.easeIn}, "-=.5")

		.from(overlay3, .5, {autoAlpha:0})
		
		.from(sticker, .25, {autoAlpha:0, rotation:-18, scale:1.5, ease: Sine.easeIn})
		.from(overlay4, .5, {autoAlpha:0}, "+=.75");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
