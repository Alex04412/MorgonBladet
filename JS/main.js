


var button3 = $(".button-3")
var check1 = 0
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
      swSlider.css("background-color", "#90EE90");

      head1.css("color", "#ffffff");

      clickS.animate({
        right: "-=40",

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
      right: "+=40",
    }, 250, function(){

    });
  }
});

button3.click(function(){
  var the_element=$(event.target)
  the_element_parent=the_element.parent().parent().parent().parent().parent()
  the_element_artikel=the_element.parent().parent()
  if(check1 %2 == 0){
    the_element.html("Läs mindre")


    the_element_parent.addClass("aktive")
    the_element_artikel.addClass("aktivated")
  }else {
    the_element_parent.removeClass("aktive")
    the_element_artikel.removeClass("aktivated")
    the_element.html("Läs mer")

  }

  check1++;

});
var section = $(".section");
var comment = $(".comment");
comment.click(function functionName() {
  the_commment=comment.parent().children(".input").val()
section.html('<img class="profil" src="Bilder/Mormor.jpeg"><h4>Agdha 48:</h4><p>'+the_commment+'</p>')


});
