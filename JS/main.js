

var swSlider = $("#switchSlider");
var clickS = $("#click");
var switch1 = $("#switch");
var dark = false;
var top1 = $("#top");
var artiklar = $("#artiklar");
var info1 = $("#info");
var sök = $("#sök");
var nyheter = $("#nyheter");
var head1 = $("header");
var topimg =$("#topimg");


swSlider.click(function(){
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
      swSlider.css("background-color", "#0F0E0E");

      head1.css("color", "#ffffff");

      clickS.animate({
        right: "-=45",

      }, 250, function(){

      });
  }
  else {
    dark=false;
    console.log("dark off");
    head1.css("background-color", "#90EE90");
    artiklar.css("background-color", "#90EE90");
    info1.css("background-color", "#90EE90");
    sök.css("background-color", "#90EE90");
    switch1.css("background-color", "white");
    nyheter.css("background-color", "#90EE90");
    top1.css("background-color", "white");
    topimg.css("background-color", "white");
    swSlider.css("background-color", "#3d3d3d");

    head1.css("color", "black");

    clickS.animate({
      right: "+=45",
    }, 250, function(){

    });
  }
});
