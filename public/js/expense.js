var transID;

var totalSpent = localStorage.getItem("totalAmntSpent");


$(".deleteLink").click(function(e) {
  transID = $(this).closest('.deleteLink').attr('id');

  $.get("/viewTransactions", deleteTrans);
});


$("#submitBtn").click(function(e) {
  var spent = $("#amount").val();

  console.log(spent);

  if( totalSpent == null ) {
    totalSpent = spent;
  }
  else {
    var totalSum = Number(totalSpent) + Number(spent);
    console.log(totalSum);
    totalSpent = totalSum;
  }

  var indicatorCircleValue = Number(localStorage.getItem("dailyIndicatorAmnt"));

  var updatedCircleValue = (indicatorCircleValue - totalSpent).toFixed(2);

  localStorage.setItem("totalAmntSpent", totalSpent);
  localStorage.setItem("dailyIndicatorAmnt", updatedCircleValue);
  localStorage.setItem("originalIndicatorAmnt", indicatorCircleValue);
});

function deleteTrans(result) {
  console.log("transID: " + transID );
  console.log(result["transactions"][transID]);

  var i;

  for( i = 0; i < result["transactions"].length; i++ ) {
    if(result["transactions"][i].transactionID == transID) {
      console.log(result["transactions"][i].transactionID);
      $.post("/deleteTransactions", result["transactions"][i], function(res) { });
    }
  }

  console.log(result["transactions"].length);

}
