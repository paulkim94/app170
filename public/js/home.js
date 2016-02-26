var weeklyAmnt = localStorage.getItem("weeklyIndicatorAmnt");
var dailyAmnt = localStorage.getItem("dailyIndicatorAmnt"); // updated daily budget indicator

var originalAmnt = localStorage.getItem("originalIndicatorAmnt"); // original daily budget indicator
var totalSpent = localStorage.getItem("totalAmntSpent");


console.log(dailyAmnt);
console.log(originalAmnt);
console.log(totalSpent);

var percentUsed = 100 - ((dailyAmnt / originalAmnt).toFixed(2) * 100);

console.log("Percent Used: ", percentUsed);

if( dailyAmnt == null ) {
  dailyAmnt = originalAmnt;
  $("#weeklyIndicatorNum").html("$" + dailyAmnt);
}
else {
  $("#weeklyIndicatorNum").html("$" + dailyAmnt);
}

$("#divCircle").attr("class", "c100 p" + percentUsed + " huge green");

inputData();

updateProgressBar();

function inputData() {

  /* Todays date */
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if( totalSpent == null ) {
    totalSpent = 0;
  }

  // Indicator description
  var descriptionIndicator = "TODAY: " + mm + "/" + dd +"/" + yyyy +
                              " <br> DAILY SPENDING LIMIT: $" +
                         dailyAmnt + "<br> CURRENTLY SPENT: $" + totalSpent;

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

$("#submitBtn").click(function(e) {
  var spent = $("#amount").val();

  var category = $("#category").val();

  var catSpend = { "category" : category, "spent" : spent}
  var catData = { "categorySpending": [] };
  catData["categorySpending"].push(catSpend);

  if( localStorage.getItem("categorySpending") == null ) {
    localStorage.setItem("categorySpending", JSON.stringify(catData));
    console.log(catData["categorySpending"]);
  }
  else {
    var updatedCategorySpending = JSON.parse(localStorage.getItem("categorySpending"));
    console.log(updatedCategorySpending);
    updatedCategorySpending["categorySpending"].push(catSpend);
    localStorage.setItem("categorySpending", JSON.stringify(updatedCategorySpending));
  }

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
  localStorage.setItem("dailyIndicatorAmnt", updatedCircleValue);
  localStorage.setItem("originalIndicatorAmnt", indicatorCircleValue);
});
