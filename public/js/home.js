console.log(localStorage.getItem("weeklyIndicatorAmnt"));

var weeklyAmnt = localStorage.getItem("weeklyIndicatorAmnt");
var dailyAmnt = localStorage.getItem("dailyIndicatorAmnt");

//$("#weeklyIndicatorNum").html("$" + weeklyAmnt);
$("#weeklyIndicatorNum").html("$" + dailyAmnt);


$("#divCircle").attr("class", "c100 p0 huge green");

inputData();

updateProgressBar();

function inputData() {

  /* Todays date */
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  // Indicator description
  var descriptionIndicator = "TODAY: " + mm + "/" + dd +"/" + yyyy +
                              " <br> DAILY SPENDING LIMIT: $" +
                         dailyAmnt + "<br> CURRENTLY SPENT: $0";

  $("#weeklyIndicatorDescription").html(descriptionIndicator);

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
