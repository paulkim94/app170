var transID;
var editTransID;

// Flags
var editClicked; // checks whether the edit link was clicked or not

var transObjEdited; // edited JSON object with updated values

//var totalSpent = localStorage.getItem("totalAmntSpent");

/* When edit link for transaction clicked */
$(".editLink").click(function(e) {
  editTransID = $(this).closest('.editLink').attr('id');

  $("#transactionForm").attr("action", "/editTransaction");
  $("#submitBtn").attr("value", "Update Transaction");

  editClicked = 1;

  $.get("/viewTransactions", editTrans);
});

/* When delete link for transaction clicked */
$(".deleteLink").click(function(e) {
  transID = $(this).closest('.deleteLink').attr('id');

  $.get("/viewTransactions", deleteTrans);
});

$("#submitBtn").click(function(e) {
  if(editClicked == 1) {

    transObjEdited.nameTransaction = $("#nameTransaction").val();
    transObjEdited.amount = $("#amount").val();
    transObjEdited.date = $("#date").val();
    transObjEdited.category = $("#category").val();
    //console.log(transObjEdited);

    $.post("/editTransaction", transObjEdited, function(res) { });
    editClicked = 0;
  }

  /*var spent = $("#amount").val();
  var category = $("#category").val();

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
  //localStorage.setItem("dailyIndicatorAmnt", updatedCircleValue);
  localStorage.setItem("originalIndicatorAmnt", indicatorCircleValue);*/
});

function editTrans(result) {

  for( i = 0; i < result["transactions"].length; i++ ) {
    if(result["transactions"][i].transactionID == editTransID) {
      // Get the data from the row & prepopulate the data in the modal
      $("#nameTransaction").val(result["transactions"][i].nameTransaction);
      $("#amount").val(result["transactions"][i].amount);
      $("#date").val(result["transactions"][i].date);
      $("#category").val(result["transactions"][i].category);

      transObjEdited = result["transactions"][i];
    }
  }

}

function deleteTrans(result) {
  //console.log("transID: " + transID );
  //console.log(result["transactions"][transID]);

  var i;

  for( i = 0; i < result["transactions"].length; i++ ) {
    if(result["transactions"][i].transactionID == transID) {
      //console.log(result["transactions"][i].transactionID);
      $.post("/deleteTransactions", result["transactions"][i], function(res) { });
    }
  }

  //console.log(result["transactions"].length);

}
