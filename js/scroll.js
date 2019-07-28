var elemCountNumberFlg = false;
var elemCountNumberFlg2 = false;
var elemCountNumberFlg3 = false;
var elemCountNumberFlg4 = false;
var elemCountNumberFlg5 = false;

$(window).on('scroll', function (){

  // Number Count
  var elemCountNumber = $('.count-number-1');
  elemCountNumber.each(function () {
    if (!elemCountNumberFlg) {
        if (judgeExe($(this), funcCountAnimate)) {
            elemCountNumberFlg = true;
        }
    }
  });

  var elemCountNumber2 = $('.count-number-2');
  elemCountNumber2.each(function () {
    if (!elemCountNumberFlg2) {
        if (judgeExe($(this), funcCountAnimate)) {
            elemCountNumberFlg2 = true;
        }
    }
  });

  var elemCountNumber3 = $('.count-number-3');
  elemCountNumber3.each(function () {
    if (!elemCountNumberFlg3) {
        if (judgeExe($(this), funcCountAnimate)) {
            elemCountNumberFlg3 = true;
        }
    }
  });

  var elemCountNumber4 = $('.count-number-4');
  elemCountNumber4.each(function () {
    if (!elemCountNumberFlg4) {
        if (judgeExe($(this), funcCountAnimate)) {
            elemCountNumberFlg4 = true;
        }
    }
  });

  var elemCountNumber5 = $('.count-number-5');
  elemCountNumber5.each(function () {
    if (!elemCountNumberFlg5) {
        if (judgeExe($(this), funcCountAnimate)) {
            elemCountNumberFlg5 = true;
        }
    }
  });


  // Skill Bar
  var elem = $('.skillbar');

  elem.each(function () {

    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 5) ){
        barAnimate($(this));
    }
  });


  function judgeExe(obj, funcCallback) {
      var elemOffset = obj.offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > elemOffset - wh + (wh / 4) ){
          funcCallback(obj);
          return true;
      }

      return false;
    }

});
