var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {

		t.set(hero, {y:"-=650"});
		t.set(overlay1, {y:"-=250"});
		t.set(overlay2, {opacity:0});
		t.set(overlay3, {opacity:0});
		// t.set(overlay4, {opacity:0});
		t.set(sticker, {opacity:0});


		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(hero, .5, {y:0, ease: Sine.easeIn})
		.to(overlay1, .75, {y:0, ease: Sine.easeIn})
		

		.to(overlay2, .5, {opacity:1}, "+=.75")
		
		.to(sticker, .25, {opacity:1}, "+=.25")
		.to(overlay3, .5, {opacity:1}, "+=.75");
		
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
