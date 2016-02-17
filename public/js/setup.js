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
	var goalDescription;
	var spendingDescription;
	var goalDate;
	var goalAmount;

	/* When nextButton in Step 1 is clicked */
	$("#nextButton1").click(function(e) {

		/* Validate inputs later */

		goalAmount = $("#goalAmount").val();
		var goalName = $("#goalName").val();
		goalDate = $("#date").val();
		var validationMsg;

		/*console.log(goalAmount);
		console.log(goalName);
		console.log(goalDate);
		console.log("Next Clicked");*/

		/* TODO Empty input validation*/
		if(goalAmount == null || goalAmount == "") {
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
		}

		$(".setup1").addClass("hidden");
		$(".setup2").removeClass("hidden");

		goalDescription = "GOAL: I want to save $" + goalAmount +
	  " for a " + goalName + " by " + goalDate + ".";

		$("#goalDescription").html(goalDescription);

 	});

	/* When next button in Step 2 is clicked */
 	$("#nextButton2").click(function(e) {
 		console.log("Next Clicked");

		$("#goalDescription3").html(goalDescription);

		/* Actual date */
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		/* The date to save up by */
		var dateGoal = new Date(goalDate);
		var goalDateDay = dateGoal.getDate();
		var goalDateMonth = dateGoal.getMonth() + 1;
		console.log(goalDateDay);

		/* Gets input value from Step 2 page */
		var monthlySpending = $("#monthlySpending").val();
		var necessitySpendings = $("#necessities").val();
		var otherSpending = $("#pastSpending").val();

		// The monthly available budget
		var monthlyBudget = monthlySpending - necessitySpendings - otherSpending;

		spendingDescription = "SPENDING HABITS: I usually spend $" +
													monthlySpending + " per month.";

		var budgetDescription = "THIS MONTH'S BUDGET: My current spending budget after paying for necessities is $" +
														monthlyBudget + ".";

		if( dd === goalDateDay ) {
			/* EXACTLY month(s) later */
			var diffMonths = goalDateMonth - mm;

			var savingsDescription = "To reach your goal, you need to save $" +
															 (goalAmount / diffMonths).toFixed(2) + " per month.";

			var newBudgetDescription = "From now on, I plan to spend only $" +
																 (monthlyBudget - (goalAmount / diffMonths).toFixed(2)) +
																 " per month until " + goalDate;
		}
		else {
			var oneDay = 24 * 60 * 60 * 1000;
			var diffDays = Math.round(Math.abs((dateGoal.getTime() - today.getTime())/(oneDay)));

			var savingsDescription = "To reach your goal, you need to save $" +
															 (goalAmount / diffDays).toFixed(2) +
															 " per day for the next " + diffDays + " days.";

			var newBudgetDescription = "Your new spending budget is $" +
			(((monthlyBudget / 28) - (goalAmount / diffDays)).toFixed(2) * 7).toFixed(2) +
			" per week for the next 4 weeks";

		}

		//var savingsDescription = "To reach your goal, you need to save $";

		$("#spendingHabits").html(spendingDescription);
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
		$(".setup5").removeClass("hidden");
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
