


var switch1 = $("#switch");
var dark = false;
var top1 = $("#top");
var artiklar = $("#artiklar");
var info1 = $("#info");
var sök = $("#sök");
var nyheter = $("#nyheter");
var head1 = $("header");
var topimg =$("#topimg");
var lightrad = $("#Light");
var darkrad = $("#Dark");



switch1.click(function(){
  if (dark==false) {
    dark=true;
      console.log("dark on");
      head1.css("background-color", "#3d3d3d");
      artiklar.css("background-color", "#3d3d3d");
      info1.css("background-color", "#3d3d3d");
      sök.css("background-color", "#3d3d3d");
      switch1.css("background-color", "#3d3d3d");
      nyheter.css("background-color", "#3d3d3d");
      top1.css("background-color", "#3d3d3d");
      topimg.css("background-color", "#3d3d3d");


      head1.css("color", "#ffffff");
  }
  else {
    dark=false;
    console.log("dark off");
    head1.css("background-color", "green");
    artiklar.css("background-color", "green");
    info1.css("background-color", "green");
    sök.css("background-color", "green");
    switch1.css("background-color", "white");
    nyheter.css("background-color", "green");
    top1.css("background-color", "white");
    topimg.css("background-color", "white");

    head1.css("color", "black");
  }

});
