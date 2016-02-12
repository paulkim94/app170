'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	$("#nextButton1").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup1").addClass("hidden");
 		$(".setup2").removeClass("hidden");
 	});

 	$("#nextButton2").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup2").addClass("hidden");
 		$(".setup3").removeClass("hidden");
 	});

 	$("#backButton2").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup2").addClass("hidden");
 		$(".setup1").removeClass("hidden");
 	});

 	$("#nextButton3").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup3").addClass("hidden");
 		$(".setup4").removeClass("hidden");
 	});

 	$("#backButton3").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup3").addClass("hidden");
 		$(".setup2").removeClass("hidden");
 	});

 	$("#nextButton4").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup4").addClass("hidden");
 		$(".setup5").removeClass("hidden");
 	});

 	$("#backButton4").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup4").addClass("hidden");
 		$(".setup3").removeClass("hidden");
 	});
 }