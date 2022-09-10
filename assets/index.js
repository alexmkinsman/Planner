//date and time display
// document.getElementById("current-time").innerHTML = currentTime();

// function currentTime() {
//     var date = new Date();
//     var hours = date.getHours();
//     var days = date.getDay(); 
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// }


//color code time blocks
//if currentTime<appointment time --> be green

//if currentTime=appointment time --> be white
//if currentTime>appointment time --> be red


$(document).ready(function(){
  var value = $(this).siblings('description').val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time,value);

  $(".notification").addClass("show")

  setTimeout(function(){
    $(".notification").removeClass('show');

  }, 5000);

  function hourUpdate(){
    var currentHour = moment().hours();

  }

  hourUpdate();

  //local storage not working.
  $("#nine-am .description").val(localStorage.getItem("nine-am"))
  $("#ten-am .description").val(localStorage.getItem("ten-am"))
  $("#eleven-am .description").val(localStorage.getItem("eleven-am"))
  $("#twelve-pm .description").val(localStorage.getItem("twelve-pm"))
  $("#one-pm .description").val(localStorage.getItem("one-pm"))
  $("#two-pm .description").val(localStorage.getItem("two-pm"))
  $("#three-pm .description").val(localStorage.getItem("three-pm"))
  $("#four-pm .description").val(localStorage.getItem("four-pm"))
  $("#five-pm .description").val(localStorage.getItem("five-pm"))


  //display current day message
  $("#currentDay").text(moment().format("dddd, MMMM Do"));


});