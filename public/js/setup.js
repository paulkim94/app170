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

		var validationMsg = "";

		/* TODO Empty input validation*/
		if(monthlyIncome == null || monthlyIncome == "") {
			validationMsg = "- Please enter your monthly income\n";
		}
		if(necessities == null || necessities == "") {
			validationMsg += "- Please enter how much you spend on necessities\n";
		}
		if(spentSoFar == null || spentSoFar == "") {
			validationMsg += "- Please enter how much you spent so far";
		}
		if(validationMsg != "") {
			alert(validationMsg);
			return;
		}

		//console.log(monthlyIncome + necessities + spentSoFar);

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


		localStorage.setItem("goalTitle", goalName);
		localStorage.setItem("goalAmnt", goalAmount);

		var validationMsg = "";

		/* TODO Empty input validation*/
		if(goalName == null || goalName == "") {
			validationMsg = "- Please enter a name for your goal\n";
		}
		if(goalAmount == null || goalAmount == "") {
			validationMsg += "- Please enter how much you have to save\n";
		}
		if(goalDate == null || goalDate == "") {
			validationMsg += "- Please enter the date you have to save by";
		}
		if(validationMsg != "") {
			alert(validationMsg);
			return;
		}

		//$(".setup2").addClass("hidden");
		//$(".setup3").removeClass("hidden");

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

	console.log(today);

	/*Convert month to string*/
	var currentMonth;
	switch (mm) {
		case 1:
		currentMonth = "January";
		break;
		case 2:
		currentMonth = "February";
		break;
		case 3:
		currentMonth = "March";
		break;
		case 4:
		currentMonth = "April";
		break;
		case 5:
		currentMonth = "May";
		break;
		case 6:
		currentMonth = "June";
		break;
		case 7:
		currentMonth = "July";
		break;
		case 8:
		currentMonth = "August";
		break;
		case 9:
		currentMonth = "September";
		break;
		case 10:
		currentMonth = "October";
		break;
		case 11:
		currentMonth = "November";
		break;
		case 12:
		currentMonth = "December";
		break;
	}

		/* Number of days remaining this month */
		var daysRemaining = getDaysInMonth(mm, yyyy) - dd;

		// Included because when it's the last day of a month, it shows that
		// there are no more days remaining
		if( daysRemaining == 0 ) {
			daysRemaining = 1;
		}

		console.log(daysRemaining);

		goalDescription = "GOAL: I want to save $" + goalAmount +
		" for " + goalName + " by " + goalDate + ".";

		$(".goalDescription").html(goalDescription);

		/* The date to save up by */
		var dateGoal = new Date(goalDate);
		var goalDateDay = dateGoal.getDate();
		var goalDateMonth = dateGoal.getMonth() + 1;
		console.log(goalDateDay);

		// The monthly available budget
		var monthlyBudget = monthlyIncome - necessities - spentSoFar;
		var oneDay = 24 * 60 * 60 * 1000;
		var diffDays = Math.round(Math.abs((dateGoal.getTime() - today.getTime())/(oneDay)));

		localStorage.setItem("daysLeft", diffDays);
		console.log(diffDays);

		// Based on monthly available budget, check if they can save money per day
		if( ((monthlyBudget / daysRemaining) - (goalAmount / diffDays)) < 0 ) {
			alert("Your savings goal amount is too high based on your financial situation. Please change the amount or deadline");
			return;
		}

		var monthlyIncomeDescription = "MONTHLY INCOME: $" + monthlyIncome + " per month";

		var budgetDescription = "MONTHLY SPENDING ALLOWANCE: After paying for necessities, I have $" +
		monthlyBudget + " left to spend each month.";

		var savingsDescription = "After this month, you need to save $" +
		(goalAmount / diffDays).toFixed(2) +
		" every day for the next " + (diffDays - daysRemaining) + " days. Then, you'll reach your goal!";

		var newBudgetDescription = "For the rest of " + currentMonth + ", the maximum you should spend per day is $" +
		((monthlyBudget / daysRemaining) - (goalAmount / diffDays)).toFixed(2) +
		".";

		//localStorage.setItem("weeklyIndicatorAmnt", (((monthlyBudget / 28) - (goalAmount / diffDays)).toFixed(2) * 7).toFixed(2) )
		localStorage.setItem("dailyIndicatorAmnt", ((monthlyBudget / daysRemaining) - (goalAmount / diffDays)).toFixed(2) );

		$(".monthlyDescription").html(monthlyIncomeDescription);
		$(".savingsDescription").html(savingsDescription);
		$(".monthlyBudget").html(budgetDescription);

		$(".savingsGuide").html(savingsDescription);
		$(".newBudget").html(newBudgetDescription);

		$(".setup2").addClass("hidden");
		$(".setup3").removeClass("hidden");

	});

  $("#finishButton").click(function(e){
		console.log("Finish clicked");
		var totalCoins = 20;
		localStorage.setItem("totalCoins", totalCoins);
	});


	$("#backButton2").click(function(e) {
		console.log("Back Clicked");
		$(".setup2").addClass("hidden");
		$(".setup1").removeClass("hidden");
	});

	$("#nextButton3").click(function(e) {
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
