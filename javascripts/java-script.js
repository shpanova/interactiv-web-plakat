$(document).ready(function(){

    $(".fibut").click(function(){
        $(".second").addClass("onosamoe");
        $(".first").addClass("netosamoe");
    });

    $(".ff").click(function(){
        $( ".sebut1" ).remove();
        $( ".stl1" ).remove();
        $( ".obvodka22" ).remove();
    });

    $(".sebut").click(function(){
        $(".second").addClass("netosamoe");
        $(".third").addClass("onosamoe");
    });

    $(".stl").click(function(){
        $(".second").addClass("netosamoe");
        $(".third").addClass("onosamoe");
    });

    $(".tri").click(function(){
        $(".third").addClass("netosamoe");
        $(".fourth").addClass("onosamoe");
    });

    $(".trl").click(function(){
        $(".third").addClass("netosamoe");
        $(".fourth").addClass("onosamoe");
    });

    $(".forb").click(function(){
        $(".fourth").addClass("netosamoe");
        $(".fiveth").addClass("onosamoe");
    });

    $(".frl").click(function(){
        $(".fourth").addClass("netosamoe");
        $(".fiveth").addClass("onosamoe");
    });

    /* _________________ кнопки 5 cекция ___________________ */

    $(".fiveb").click(function(){
        $(".fiveth").addClass("netosamoe");
        $(".sixth").addClass("onosamoe");
    });

    $(".fiverl").click(function(){
        $(".fiveth").addClass("netosamoe");
        $(".sixth").addClass("onosamoe");
    });

    $(".obvodka5").click(function(){
        $(".fiveth").addClass("netosamoe");
        $(".sixth").addClass("onosamoe");
    });

      $(".sixbtn").click(function(){
          location.reload(true);
      });

    /* _________________ кнопки 5 секция ___________________ */

    $( "input" )
    .keyup(function() {
      var value = $( this ).val();
      $( "p" ).text( value );
    })
    .keyup();

/* _________________ кнопки___________________ */

/* _______ 1 экран _______ */

/* _______ 2 экран _______ */

$(".stl").mouseover(function(){
  $(".sebut").addClass("btnactive");
  $(".obvodka2").addClass("obact");
});

$(".stl").mouseout(function(){
  $(".sebut").removeClass("btnactive");
  $(".obvodka2").removeClass("obact");
});

$(".sebut").mouseover(function(){
  $(".stl").addClass("btnactive");
  $(".obvodka2").addClass("obact");
});

$(".sebut").mouseout(function(){
  $(".stl").removeClass("btnactive");
  $(".obvodka2").removeClass("obact");
});

$(".obvodka2").mouseover(function(){
  $(".stl").addClass("btnactive");
  $(".sebut").addClass("btnactive");
});

$(".obvodka2").mouseout(function(){
  $(".stl").removeClass("btnactive");
  $(".sebut").removeClass("btnactive");
});


/* _______ 3 экран _______ */
$(".trl").mouseover(function(){
  $(".tri").addClass("btnactive");
  $(".obvodka3").addClass("obact");
});

$(".trl").mouseout(function(){
  $(".tri").removeClass("btnactive");
  $(".obvodka3").removeClass("obact");
});

$(".tri").mouseover(function(){
  $(".trl").addClass("btnactive");
  $(".obvodka3").addClass("obact");
});

$(".tri").mouseout(function(){
  $(".trl").removeClass("btnactive");
  $(".obvodka3").removeClass("obact");
});

$(".obvodka3").mouseover(function(){
  $(".trl").addClass("btnactive");
  $(".tri").addClass("btnactive");
});

$(".obvodka3").mouseout(function(){
  $(".trl").removeClass("btnactive");
  $(".tri").removeClass("btnactive");
});

/* _______ 4 экран _______ */
$(".frl").mouseover(function(){
  $(".forb").addClass("btnactive");
  $(".obvodka4").addClass("obact");
});

$(".frl").mouseout(function(){
  $(".forb").removeClass("btnactive");
  $(".obvodka4").removeClass("obact");
});

$(".forb").mouseover(function(){
  $(".frl").addClass("btnactive");
  $(".obvodka4").addClass("obact");
});

$(".forb").mouseout(function(){
  $(".frl").removeClass("btnactive");
  $(".obvodka4").removeClass("obact");
});

$(".obvodka4").mouseover(function(){
  $(".frl").addClass("btnactive");
  $(".forb").addClass("btnactive");
});

$(".obvodka4").mouseout(function(){
  $(".frl").removeClass("btnactive");
  $(".forb").removeClass("btnactive");
});

/* _______ 5 экран _______ */

$(".fiveb").mouseover(function(){
  $(".fiverl").addClass("btnactive");
  $(".obvodka5").addClass("obact");
});

$(".fiveb").mouseout(function(){
  $(".fiverl").removeClass("btnactive");
  $(".obvodka5").removeClass("obact");
});

$(".fiverl").mouseover(function(){
  $(".fiveb").addClass("btnactive");
  $(".obvodka5").addClass("obact");
});

$(".fiverl").mouseout(function(){
  $(".fiveb").removeClass("btnactive");
  $(".obvodka5").removeClass("obact");
});

$(".obvodka5").mouseover(function(){
  $(".fiveb").addClass("btnactive");
  $(".fiverl").addClass("obact");
});

$(".obvodka5").mouseout(function(){
  $(".fiveb").removeClass("btnactive");
  $(".fiverl").removeClass("obact");
});

/* _______ 6 экран _______ */

  $( "input" )
    .keyup(function() {
      var value = $( this ).val();
      $( "p" ).text( value );
    })
    .keyup();

/* _________________ 4 секция, где выбор вкусов ___________________ */

    $(".vkus1").click(function(){
        $(".vkus2").removeClass("vka");
        $(".vkus3").removeClass("vka");
        $(".vkus4").removeClass("vka");
        $(".vkus5").removeClass("vka");
        $(".vkus6").removeClass("vka");
        $(".hhh1").removeClass("vkp");
        $(".hhh2").removeClass("vkp");
        $(".hhh3").removeClass("vkp");
        $(".hhh4").removeClass("vkp");
        $(".hhh5").removeClass("vkp");
        $(".hhh").addClass("vkp");
        $(".vkus1").addClass("vka");
        $(".forb1").remove();
        $(".frl1").remove();
        $(".rr2").removeClass("rr2a");
        $('.ppp').html('вкус состоит из любви, нежности и поддержки');
        $('.text2').html('вкус объятий');
        $( ".obvodka44" ).remove();
      });

    $(".vkus2").click(function(){
      $(".vkus1").removeClass("vka");
      $(".vkus3").removeClass("vka");
      $(".vkus4").removeClass("vka");
      $(".vkus5").removeClass("vka");
      $(".vkus6").removeClass("vka");
      $(".hhh").removeClass("vkp");
      $(".hhh2").removeClass("vkp");
      $(".hhh3").removeClass("vkp");
      $(".hhh4").removeClass("vkp");
      $(".hhh5").removeClass("vkp");
      $(".hhh1").addClass("vkp");
      $(".vkus2").addClass("vka");
      $(".forb1").remove();
      $(".frl1").remove();
      $(".rr2").removeClass("rr2a");
      $('.ppp').html('вкус состоит из волнения и счастья');
      $('.text2').html('вкус 1 свидания');
      $( ".obvodka44" ).remove();
    });


    $(".vkus3").click(function(){
      $(".vkus1").removeClass("vka");
      $(".vkus2").removeClass("vka");
      $(".vkus4").removeClass("vka");
      $(".vkus5").removeClass("vka");
      $(".vkus6").removeClass("vka");
      $(".hhh").removeClass("vkp");
      $(".hhh1").removeClass("vkp");
      $(".hhh3").removeClass("vkp");
      $(".hhh4").removeClass("vkp");
      $(".hhh5").removeClass("vkp");
      $(".hhh2").addClass("vkp");
      $(".vkus3").addClass("vka");
      $(".forb1").remove();
      $(".frl1").remove();
      $('.ppp').html('вкус состоит из любви, грусти и ностальгии');
      $(".rr2").addClass("rr2a");
      $('.text2').html('вкус родного дома');
      $( ".obvodka44" ).remove();
    });


    $(".vkus4").click(function(){
      $(".vkus1").removeClass("vka");
      $(".vkus2").removeClass("vka");
      $(".vkus3").removeClass("vka");
      $(".vkus5").removeClass("vka");
      $(".vkus6").removeClass("vka");
      $(".hhh").removeClass("vkp");
      $(".hhh1").removeClass("vkp");
      $(".hhh2").removeClass("vkp");
      $(".hhh4").removeClass("vkp");
      $(".hhh5").removeClass("vkp");
      $(".hhh3").addClass("vkp");
      $(".vkus4").addClass("vka");
      $(".forb1").remove();
      $(".frl1").remove();
      $(".rr2").removeClass("rr2a");
      $('.ppp').html('вкус состоит из злости и недовольства');
      $('.text2').html('вкус опозданий');
      $( ".obvodka44" ).remove();
    });

    $(".vkus5").click(function(){
      $(".vkus1").removeClass("vka");
      $(".vkus2").removeClass("vka");
      $(".vkus3").removeClass("vka");
      $(".vkus4").removeClass("vka");
      $(".vkus6").removeClass("vka");
      $(".hhh").removeClass("vkp");
      $(".hhh1").removeClass("vkp");
      $(".hhh2").removeClass("vkp");
      $(".hhh3").removeClass("vkp");
      $(".hhh5").removeClass("vkp");
      $(".hhh4").addClass("vkp");
      $(".vkus5").addClass("vka");
      $(".rr2").addClass("rr2a");
      $(".forb1").remove();
      $(".frl1").remove();
      $('.ppp').html('вкус состоит из печали и злости');
      $('.text2').html('послевкусие отношений');
      $( ".obvodka44" ).remove();
    });

    $(".vkus6").click(function(){
      $(".vkus1").removeClass("vka");
      $(".vkus2").removeClass("vka");
      $(".vkus3").removeClass("vka");
      $(".vkus4").removeClass("vka");
      $(".vkus5").removeClass("vka");
      $(".hhh").removeClass("vkp");
      $(".hhh1").removeClass("vkp");
      $(".hhh2").removeClass("vkp");
      $(".hhh3").removeClass("vkp");
      $(".hhh4").removeClass("vkp");
      $(".hhh5").addClass("vkp");
      $(".vkus6").addClass("vka");
      $(".forb1").remove();
      $(".frl1").remove();
      $(".rr2").addClass("rr2a");
      $('.ppp').html('вкус состоит из ожидания и радости');
      $('.text2').html('вкус весеннего ветра');
      $( ".obvodka44" ).remove();
    });

/* _________________ 3 секция, где выбор ___________________ */

    $(".kry").click(function(){
        $(".krr").addClass("notwork");
        $(".krf").addClass("notwork");
        $(".kry").removeClass("notwork");
        $(".krr").removeClass("krra");
        $(".krf").removeClass("krfa");
        $(".kry").addClass("krya");

    });

    $(".krr").click(function(){
        $(".kry").addClass("notwork");
        $(".krf").addClass("notwork");
        $(".krr").removeClass("notwork");
        $(".kry").removeClass("krya");
        $(".krf").removeClass("krfa");
        $(".krr").addClass("krra");
    });

    $(".krf").click(function(){
        $(".kry").addClass("notwork");
        $(".krr").addClass("notwork");
        $(".krf").removeClass("notwork");
        $(".kry").removeClass("krya");
        $(".krr").removeClass("krra");
        $(".krf").addClass("krfa");
    });

    $(".i1").click(function(){
        $(".i2").addClass("notwork");
        $(".i3").addClass("notwork");
        $(".i1").removeClass("notwork");
        $(".i2").removeClass("ia1");
        $(".i3").removeClass("ia1");
        $(".i1").addClass("ia1");
    });

    $(".i2").click(function(){
        $(".i1").addClass("notwork");
        $(".i3").addClass("notwork");
        $(".i2").removeClass("notwork");
        $(".i1").removeClass("ia1");
        $(".i3").removeClass("ia1");
        $(".i2").addClass("ia1");
    });

    $(".i3").click(function(){
        $(".i1").addClass("notwork");
        $(".i2").addClass("notwork");
        $(".i3").removeClass("notwork");
        $(".i1").removeClass("ia1");
        $(".i2").removeClass("ia1");
        $(".i3").addClass("ia1");
    });


    $(".kry").click(function(){
      if($(".kry").hasClass("krya") && $(".i1").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/11.png");
        $( ".obvodka33" ).remove();
      }
      if($(".kry").hasClass("krya") && $(".i2").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/21.png");
        $( ".obvodka33" ).remove();
      }
      if($(".kry").hasClass("krya") && $(".i3").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/31.png");
        $( ".obvodka33" ).remove();
      }
    });

    $(".krr").click(function(){
      if($(".krr").hasClass("krra") && $(".i1").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/12.png");
        $( ".obvodka33" ).remove();

      }
      if($(".krr").hasClass("krra") && $(".i2").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/22.png");
        $( ".obvodka33" ).remove();
      }

      if($(".krr").hasClass("krra") && $(".i3").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/32.png");
        $( ".obvodka33" ).remove();
      }

    });

    $(".krf").click(function(){
      if($(".krf").hasClass("krfa") && $(".i1").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/13.png");
        $( ".obvodka33" ).remove();
      }
      if($(".krf").hasClass("krfa") && $(".i2").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/23.png");
        $( ".obvodka33" ).remove();
      }
      if($(".krf").hasClass("krfa") && $(".i3").hasClass("ia1")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/33.png");
        $( ".obvodka33" ).remove();
      }
    });

    $(".i1").click(function(){
      if($(".i1").hasClass("ia1") && $(".kry").hasClass("krya")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/11.png");
        $( ".obvodka33" ).remove();
      }

      if($(".i1").hasClass("ia1") && $(".krr").hasClass("krra")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/12.png");
        $( ".obvodka33" ).remove();

      }
      if($(".i1").hasClass("ia1") && $(".krf").hasClass("krfa")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/13.png");
        $( ".obvodka33" ).remove();
      }
    });

    $(".i2").click(function(){
      if($(".i2").hasClass("ia1") && $(".kry").hasClass("krya")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/21.png");
        $( ".obvodka33" ).remove();
      }
      if($(".i2").hasClass("ia1") && $(".krr").hasClass("krra")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/22.png");
        $( ".obvodka33" ).remove();
      }
      if($(".i2").hasClass("ia1") && $(".krf").hasClass("krfa")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/23.png");
        $( ".obvodka33" ).remove();
      }

    });

    $(".i3").click(function(){
      if($(".i3").hasClass("ia1") && $(".kry").hasClass("krya")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/31.png");
        $( ".obvodka33" ).remove();
      }
      if($(".i3").hasClass("ia1") && $(".krr").hasClass("krra")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/32.png");
        $( ".obvodka33" ).remove();
      }
      if($(".i3").hasClass("ia1") && $(".krf").hasClass("krfa")){
        $( ".trl1" ).remove();
        $( ".tri1" ).remove();
        $(".im11").attr("src","img/33.png");
        $( ".obvodka33" ).remove();
      }
    });


    /* _________________ цветные квадраты ___________________ */

    $(".move-area").mousemove(function(event) {
      let eye = $(".eye");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye1 = $(".eye1");
      let x = (eye1.offset().left) + (eye1.width() / 2);
      let y = (eye1.offset().top) + (eye1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye2 = $(".eye2");
      let x = (eye2.offset().left) + (eye2.width() / 2);
      let y = (eye2.offset().top) + (eye2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye3 = $(".eye3");
      let x = (eye3.offset().left) + (eye3.width() / 2);
      let y = (eye3.offset().top) + (eye3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye4 = $(".eye4");
      let x = (eye4.offset().left) + (eye4.width() / 2);
      let y = (eye4.offset().top) + (eye4.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye4.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye5 = $(".eye5");
      let x = (eye5.offset().left) + (eye5.width() / 2);
      let y = (eye5.offset().top) + (eye5.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye5.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye6 = $(".eye6");
      let x = (eye6.offset().left) + (eye6.width() / 2);
      let y = (eye6.offset().top) + (eye6.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye6.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye7 = $(".eye7");
      let x = (eye7.offset().left) + (eye7.width() / 2);
      let y = (eye7.offset().top) + (eye7.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye7.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye8 = $(".eye8");
      let x = (eye8.offset().left) + (eye8.width() / 2);
      let y = (eye8.offset().top) + (eye8.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye8.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye9 = $(".eye9");
      let x = (eye9.offset().left) + (eye9.width() / 2);
      let y = (eye9.offset().top) + (eye9.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye9.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye10 = $(".eye10");
      let x = (eye10.offset().left) + (eye10.width() / 2);
      let y = (eye10.offset().top) + (eye10.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye10.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye11 = $(".eye11");
      let x = (eye11.offset().left) + (eye11.width() / 2);
      let y = (eye11.offset().top) + (eye11.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye11.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye12 = $(".eye12");
      let x = (eye12.offset().left) + (eye12.width() / 2);
      let y = (eye12.offset().top) + (eye12.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye12.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye13 = $(".eye13");
      let x = (eye13.offset().left) + (eye13.width() / 2);
      let y = (eye13.offset().top) + (eye13.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye13.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye14 = $(".eye14");
      let x = (eye14.offset().left) + (eye14.width() / 2);
      let y = (eye14.offset().top) + (eye14.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye14.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye15 = $(".eye15");
      let x = (eye15.offset().left) + (eye15.width() / 2);
      let y = (eye15.offset().top) + (eye15.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye15.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye16 = $(".eye16");
      let x = (eye16.offset().left) + (eye16.width() / 2);
      let y = (eye16.offset().top) + (eye16.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye16.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye17 = $(".eye17");
      let x = (eye17.offset().left) + (eye17.width() / 2);
      let y = (eye17.offset().top) + (eye17.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye17.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye18 = $(".eye18");
      let x = (eye18.offset().left) + (eye18.width() / 2);
      let y = (eye18.offset().top) + (eye18.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye18.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye19 = $(".eye19");
      let x = (eye19.offset().left) + (eye19.width() / 2);
      let y = (eye19.offset().top) + (eye19.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye19.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye20 = $(".eye20");
      let x = (eye20.offset().left) + (eye20.width() / 2);
      let y = (eye20.offset().top) + (eye20.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye20.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye21 = $(".eye21");
      let x = (eye21.offset().left) + (eye21.width() / 2);
      let y = (eye21.offset().top) + (eye21.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye21.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye22 = $(".eye22");
      let x = (eye22.offset().left) + (eye22.width() / 2);
      let y = (eye22.offset().top) + (eye22.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye22.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye23 = $(".eye23");
      let x = (eye23.offset().left) + (eye23.width() / 2);
      let y = (eye23.offset().top) + (eye23.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye23.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    /* _________________ квадраты с обводкой ___________________ */

    $(".move-area").mousemove(function(event) {
      let box = $(".box");
      let x = (box.offset().left) + (box.width() / 2);
      let y = (box.offset().top) + (box.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box1 = $(".box1");
      let x = (box1.offset().left) + (box1.width() / 2);
      let y = (box1.offset().top) + (box1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box2 = $(".box2");
      let x = (box2.offset().left) + (box2.width() / 2);
      let y = (box2.offset().top) + (box2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box3 = $(".box3");
      let x = (box3.offset().left) + (box3.width() / 2);
      let y = (box3.offset().top) + (box3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box4 = $(".box4");
      let x = (box4.offset().left) + (box4.width() / 2);
      let y = (box4.offset().top) + (box4.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box4.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box5 = $(".box5");
      let x = (box5.offset().left) + (box5.width() / 2);
      let y = (box5.offset().top) + (box5.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
        box5.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)'
        });
      });

    $(".move-area").mousemove(function(event) {
        let box6 = $(".box6");
        let x = (box6.offset().left) + (box6.width() / 2);
        let y = (box6.offset().top) + (box6.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
          box6.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
          });
        });

    $(".move-area").mousemove(function(event) {
        let box7 = $(".box7");
        let x = (box7.offset().left) + (box7.width() / 2);
        let y = (box7.offset().top) + (box7.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
          box7.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
          });
    });

    $(".move-area").mousemove(function(event) {
        let box8 = $(".box8");
        let x = (box8.offset().left) + (box8.width() / 2);
        let y = (box8.offset().top) + (box8.height() / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
          box8.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
          });
    });


    /* _________________ линии ___________________ */

    $(".move-area").mousemove(function(event) {
      let line1 = $(".line1");
      let x = (line1.offset().left) + (line1.width() / 2);
      let y = (line1.offset().top) + (line1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line2 = $(".line2");
      let x = (line2.offset().left) + (line2.width() / 2);
      let y = (line2.offset().top) + (line2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line3 = $(".line3");
      let x = (line3.offset().left) + (line3.width() / 2);
      let y = (line3.offset().top) + (line3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line4 = $(".line4");
      let x = (line4.offset().left) + (line4.width() / 2);
      let y = (line4.offset().top) + (line4.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line4.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line5 = $(".line5");
      let x = (line5.offset().left) + (line5.width() / 2);
      let y = (line5.offset().top) + (line5.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line5.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });


    /* _________________ перетаскивание элементов ___________________ */

    $( function() {
     $( "#draggable" ).draggable();
     $( "#draggable1" ).draggable();
     $( "#draggable2" ).draggable();
     $( "#draggable3" ).draggable();
     $( "#draggable4" ).draggable();
     $( "#draggable5" ).draggable();
     $( "#draggable6" ).draggable();
     $( "#draggable7" ).draggable();
     $( "#draggable8" ).draggable();
     $( "#draggable9" ).draggable();
     $( "#draggable10" ).draggable();
     $( "#draggable11" ).draggable();
     $( "#draggable12" ).draggable();
     $( "#draggable13" ).draggable();
     $( "#draggable14" ).draggable();
     $( "#draggable15" ).draggable();
     $( "#draggable16" ).draggable();
     $( "#draggable17" ).draggable();
     $( "#draggable18" ).draggable();
     $( "#draggable19" ).draggable();
     $( "#draggable20" ).draggable();
     $( "#draggable21" ).draggable();
     $( "#draggable22" ).draggable();
     $( "#draggable23" ).draggable();
     $( "#draggable24" ).draggable();
     $( "#draggable25" ).draggable();
     $( "#draggable26" ).draggable();
     $( "#draggable27" ).draggable();
     $( "#draggable28" ).draggable();
     $( "#draggable29" ).draggable();
     $( "#draggable30" ).draggable();
     $( "#draggable31" ).draggable();
     $( "#draggable32" ).draggable();
     $( "#draggable33" ).draggable();
     $( "#draggable34" ).draggable();
     $( "#draggable35" ).draggable();
     $( "#draggable36" ).draggable();
     $( "#draggable37" ).draggable();
   });



});
