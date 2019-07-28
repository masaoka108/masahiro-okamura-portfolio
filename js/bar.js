 function barAnimate(obj){
    obj.find('.skillbar-bar').animate({
        width:obj.attr('data-percent')
    },3000);
}
