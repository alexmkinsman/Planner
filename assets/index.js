//color code time blocks
//if currentTime<appointment time --> be green
//if currentTime=appointment time --> be white
//if currentTime>appointment time --> be red

$(document).ready(function(){
  $(".saveBtn").on("click", function(){
    var value = $(this).siblings('.description').val();
    console.log(value);
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  })

  //match color to whether that time has passed or not
  function currentTime(){
    var currentHour = moment().hours();

    //conditional to control color blocking
    $('.time-block').each(function(){
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

  currentTime();

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