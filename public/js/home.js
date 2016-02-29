//var weeklyAmnt = localStorage.getItem("weeklyIndicatorAmnt");
var dailyAmnt = localStorage.getItem("dailyIndicatorAmnt"); // daily budget

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	updateProgressBar();
})

/*$("#submitBtn").click(function(e) {
  var spent = $("#amount").val();
  var category = $("#category").val();

  if( totalSpent == null ) {
    totalSpent = spent;
  }
  else {
    var totalSum = Number(totalSpent) + Number(spent);
    console.log(totalSum);
    totalSpent = totalSum;
  }

  var indicatorCircleValue = localStorage.getItem("dailyIndicatorAmnt");

  var updatedCircleValue = (indicatorCircleValue - totalSpent).toFixed(2);

  localStorage.setItem("totalAmntSpent", totalSpent);
  //localStorage.setItem("dailyIndicatorAmnt", updatedCircleValue);
  localStorage.setItem("originalIndicatorAmnt", indicatorCircleValue);
});*/

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Dashboard JS connected");

  /* Actual date */
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var date;

  if( mm < 10 ) {
    date = "0" + mm + "/" + dd + "/" + yyyy;
  }
  else {
    date = mm + "/" + dd + "/" + yyyy;
  }
  var dateJSON = { "date" : date }

	$("#today").html(date);

	var spentToday = Number($("#spentDay").html());
	var todayLimit = (Number(dailyAmnt) - spentToday).toFixed(2);
	$("#dailyLimit").html(todayLimit);

	// Sends today's date to index.js route
  $.post("/getDate", dateJSON, function(res) { });

  var percentUsed = (spentToday / dailyAmnt).toFixed(2) * 100;

  //console.log("Percent Used: ", percentUsed);

	$("#weeklyIndicatorNum").html("$" + todayLimit);

  $("#divCircle").attr("class", "c100 p" + percentUsed + " huge green");

	// Row 3: Goal description
	var goalTitle = localStorage.getItem("goalTitle");
	var daysLeft = localStorage.getItem("daysLeft");

	var daysLeftDescription = daysLeft + " days until...";
	//
	$("#daysLeft").html(daysLeftDescription);
	$("#goalName").html(goalTitle);
}

function updateProgressBar() {

  var goalAmnt = localStorage.getItem("goalAmnt");

  $("#goalProgress").attr("aria-valuenow", "0");
  $("#goalProgress").attr("aria-valuemax", "'" + goalAmnt + "''");
  $("#goalProgress").attr("style", "width: 0%");
  $("#savedDescription").html("$0 / " + goalAmnt + " saved");
}
