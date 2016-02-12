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
 		$("p:first").addClass("intro");
 	});

 	var step3Content = "<div class='setup3'><h3>GOAL: I want to save up $500 for a trip to New York by July 2016.</h3><hr><h3>I usually spend $50 per week.</h3><hr><h2>Step 3: Choose a weekly or monthly budget.</h2><p>To reach your goal, you need to save $100 each month, or $25 each week.</p><form><input type='radio' name='budgetOption' value='weekly'>From now on, I will plan to spend only $100 per month.<br><input type='radio' name='budgetOption' value='weekly'>From now on, I will plan to spend only $100 per month.> Female<br></form><div class='buttons'><a class='btn-piggy' id='backButton2' href='#'>Back &lsaquo;</a><a class='btn-piggy' id='nextButton2' href='#'>Next &rsaquo;</a></div></div>";
 	$("#nextButton2").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup").html(step3Content);
 	});

 	$("#backButton2").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup").html(".setup1");
 	});

 	
 }