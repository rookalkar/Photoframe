var tapped = false;
function makeCall() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("display").style.opacity = 0.5;
  document.getElementById("overlay").style.display = "block";
}

function cancelCall() {
  document.getElementById("gallery").style.display = "block";
  document.getElementById("display").style.opacity = 1;
  document.getElementById("overlay").style.display = "none";
}

function showCTA() {
  if(tapped) {
    $("#cta_buttons").hide()
    $(".multiple_replies").hide()
  }
  else {
    $(".caption").slideDown()
    $("#cta_buttons").show()
  }
  tapped = !tapped;
}

function writeReply() {
  $("#cta_buttons").hide()
  $(".reply").show()
}

function hideReply() {
  $("#cta_buttons").show()
  $(".reply").hide()
}

function sendReply() {
  $("#cta_buttons").show()
  $(".multiple_replies").show()
  $(".reply").hide()
}
