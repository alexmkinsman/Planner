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
      //
      var blockHour = parseInt($(this).attr("id").split("-")[0]);
        console.log(blockHour);
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
  $("#9-am .description").val(localStorage.getItem("9-am"))
  $("#10-am .description").val(localStorage.getItem("10-am"))
  $("#11-am .description").val(localStorage.getItem("11-am"))
  $("#12-hour .description").val(localStorage.getItem("12-hour"))
  $("#13-hour .description").val(localStorage.getItem("13-hour"))
  $("#14-hour .description").val(localStorage.getItem("14-hour"))
  $("#15-hour .description").val(localStorage.getItem("15-hour"))
  $("#16-hour .description").val(localStorage.getItem("16-hour"))
  $("#17-hour .description").val(localStorage.getItem("17-hour"))


  //display current day message
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

});