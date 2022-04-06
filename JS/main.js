


var switch1 = $("#switch");
var dark = false;
var top1 = $("#top");
var artiklar = $("#artiklar");
var info1 = $("#info");
var head1 = $("header")



switch1.click(function(){
  if (dark==false) {
    dark=true;
      console.log("dark on");
      head1.css("background-color", "#3d3d3d");
      artiklar.css("background-color", "#3d3d3d");
      info1.css("background-color", "#3d3d3d");
  }
  else {
    dark=false;
    console.log("dark off");
    head1.css("background-color", "green");
    artiklar.css("background-color", "green");
    info1.css("background-color", "green");
  }

});
