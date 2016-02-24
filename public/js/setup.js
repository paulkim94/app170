'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	/* Sharable variables */

	// Inputs from Step 1.
	var monthlyIncome;
	var necessities;
	var spentSoFar;

	// Inputs from Step 2.
	var goalDate;
	var goalName;
	var goalAmount;
	var goalDescription;

	/* When nextButton in Step 1 is clicked */
	$("#nextButton1").click(function(e) {

		/* Input info from Step 1. */
		monthlyIncome = $("#monthlyIncome").val();
		necessities = $("#necessities").val();
		spentSoFar = $("#spentSoFar").val();

		console.log(monthlyIncome + necessities + spentSoFar);

		$(".setup1").addClass("hidden");
		$(".setup2").removeClass("hidden");
 	});

	/* When next button in Step 2 is clicked */
 	$("#nextButton2").click(function(e) {
 		console.log("Next Clicked");

		/* Input info from Step 2. */

		goalAmount = $("#goalAmount").val();
		goalName = $("#goalName").val();
		goalDate = $("#date").val();

		//var validationMsg;

		/* TODO Empty input validation*/
		/*if(goalAmount == null || goalAmount == "") {
			validationMsg = "- Please enter a goal amount";
		}
		if(goalName == null || goalName == "") {
			validationMsg = "- Please enter a name for your goal";
		}
		if(goalDate == null || goalDate == "") {
			validationMsg = "- Please enter a date";
		}
		if(validationMsg != null) {
			alert(validationMsg);
			return;
		}*/

		localStorage.setItem("goalTitle", goalName);
		localStorage.setItem("goalAmnt", goalAmount);

		$(".setup2").addClass("hidden");
		$(".setup3").removeClass("hidden");

		/* To be added on summary portion of setup */

		goalDescription = "GOAL: I want to save $" + goalAmount +
		" for a " + goalName + " by " + goalDate + ".";

		$("#goalDescription").html(goalDescription);
		/* Returns number of days in any month */
		var getDaysInMonth = function(month, year) {
			return new Date(year, month, 0).getDate();
		}

		/* Actual date */
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		/* Number of days remaining this month */
		var daysRemaining = getDaysInMonth(mm, yyyy) - dd;

		console.log(daysRemaining);

		/* The date to save up by */
		var dateGoal = new Date(goalDate);
		var goalDateDay = dateGoal.getDate();
		var goalDateMonth = dateGoal.getMonth() + 1;
		console.log(goalDateDay);

		// The monthly available budget
		var monthlyBudget = monthlyIncome - necessities - spentSoFar;

		var monthlyIncomeDescription = "MONTHLY INCOME: $" + monthlyIncome + " per month";

		var budgetDescription = "CURRENT MONTH BUDGET: My budget after paying for necessities is $" +
														monthlyBudget + ".";

		var oneDay = 24 * 60 * 60 * 1000;
		var diffDays = Math.round(Math.abs((dateGoal.getTime() - today.getTime())/(oneDay)));

		localStorage.setItem("daysLeft", diffDays);
		console.log(diffDays);

		var savingsDescription = "To reach your goal, you need to save $" +
														 (goalAmount / diffDays).toFixed(2) +
														 " per day for the next " + diffDays + " days.";

		var newBudgetDescription = "Your new spending budget is $" +
		((monthlyBudget / daysRemaining) - (goalAmount / diffDays)).toFixed(2) +
		" per day for the remaining month";

		//localStorage.setItem("weeklyIndicatorAmnt", (((monthlyBudget / 28) - (goalAmount / diffDays)).toFixed(2) * 7).toFixed(2) )
		localStorage.setItem("dailyIndicatorAmnt", ((monthlyBudget / daysRemaining) - (goalAmount / diffDays)).toFixed(2) );

		$("#monthlyDescription").html(monthlyIncomeDescription);
		$("#monthlyBudget").html(budgetDescription);

		$("#savingsGuide").html(savingsDescription);
		$("#newBudget").html(newBudgetDescription);

 		$(".setup2").addClass("hidden");
 		$(".setup3").removeClass("hidden");

 	});

 	$("#backButton2").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup2").addClass("hidden");
 		$(".setup1").removeClass("hidden");
 	});

	$("#confirm").click(function(e) {
		$(".setup3").addClass("hidden");
		$(".setup4").removeClass("hidden");
	});

 	$("#nextButton").click(function(e) {
 		console.log("Next Clicked");
 		$(".setup3").addClass("hidden");
 		$(".setup4").removeClass("hidden");
 	});

 	$("#backButton3").click(function(e) {
 		console.log("Back Clicked");
 		$(".setup3").addClass("hidden");
 		$(".setup2").removeClass("hidden");
 	});
 }
