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

  

});