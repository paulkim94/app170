console.log(localStorage.getItem("weeklyIndicatorAmnt"));

var weeklyAmnt = localStorage.getItem("weeklyIndicatorAmnt");
var dailyAmnt = localStorage.getItem("dailyIndicatorAmnt");

//$("#weeklyIndicatorNum").html("$" + weeklyAmnt);
$("#weeklyIndicatorNum").html("$" + dailyAmnt);

// Choose one of the descriptions
var descriptionIndicator = "WEEK: 2/17 to 2/24 <br> SPENDING LIMIT: $" +
                           weeklyAmnt + "<br><br> CURRENTLY REMAINING";
descriptionIndicator = "TODAY: [DATE] <br> DAILY SPENDING LIMIT: $" +
                       dailyAmnt + "<br> CURRENTLY SPENT: $0";

$("#weeklyIndicatorDescription").html(descriptionIndicator);

$("#divCircle").attr("class", "c100 p0 huge green");
