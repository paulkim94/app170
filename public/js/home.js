//var weeklyAmnt = localStorage.getItem("weeklyIndicatorAmnt");
var dailyAmnt = localStorage.getItem("dailyIndicatorAmnt"); // daily budget
var closetAvatarImg = localStorage.getItem("currentItemWorn");
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	updateProgressBar();

	$("#editGoal").click(function(e) {
		var result = confirm("Editing the goal will take you back to the setup page.");
		if( result == true ) {
			localStorage.clear();
			window.location.href = "/setup";
		}
	});

	$("#deleteGoal").click(function(e) {
		var result = confirm("Are you sure you want to delete this goal? You will be sent back to the setup page to set a new goal.");
		if( result == true ) {
			localStorage.clear();
			window.location.href = "/setup";
		}
	});
})

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

	if( dd < 10 ) {
		dd = "0" + dd;
	}

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
	$.post("/getDate2", dateJSON, function(res) { });

  var percentUsed = (spentToday / dailyAmnt).toFixed(2) * 100;

  //console.log("Percent Used: ", percentUsed);

	$("#weeklyIndicatorNum").html("$" + todayLimit);

  $("#divCircle").attr("class", "c100 p" + percentUsed + " huge green");

	// Piggy Avatar Image
	var currentCoins = localStorage.getItem("totalCoins");

	$("#avatar-image").append("<h4 style='text-align: center;'>Total Coins: " + currentCoins + "</h4>");


	if( closetAvatarImg == null ) {
		console.log("Piggy didn't wear anything yet");
	}
	else {
		var closetAvatarJSON = JSON.parse(closetAvatarImg);
		console.log(closetAvatarJSON.itemID);
		console.log(closetAvatarJSON.imgWorn);

		if(closetAvatarJSON.itemID == "item0") {
			var htmlLine = "<img src='../images/piggy-avatar-1.png' alt='Pig Avatar' height='60%' width='60%' style='display: block; margin: auto; padding-top: 10px'>";
		}
		else {
			var htmlLine = "<img src='../images/piggy-avatar-2.png' alt='Pig Avatar' height='60%' width='60%' style='display: block; margin: auto; padding-top: 10px'>";
		}

		$("#avatar-image").html(htmlLine);
		$("#avatar-image").append("<h4 style='text-align: center;'>Total Coins: " + currentCoins + "</h4>");
	}



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

/*function deleteGoal() {
	var result = confirm("Are you sure you want to delete this goal? You will be directed to the setup page to set a new goal")''

	if( result ) {
		localStorage.clear();
		window.href.location = "/setup";
	}
}*/
