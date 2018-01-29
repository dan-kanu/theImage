var ourRequest = new XMLHttpRequest();

var btn = document.getElementById('mybtn');

btn.addEventListener("click", function(){
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);

    }
    ourRequest.send();
    
} );



$(function()
 {
   if(!window.File || !window.FileReader)
     return alert('Oops!\nYour browser isn\'t quite compatible with this pen.');
   

   $('#bgImg > input').bind('change', function()
   {
     var file = this.files[0],
         reader = new FileReader();
         reader.onload = function(e)
         {
        //   $('#bgImg > img').attr('src', e.target.result);
          $('#bgImg2 > img').attr('src', e.target.result);
          $('.bg1 > img').attr('src', e.target.result);
          $('#img1 > img').attr('src', e.target.result);
          $('#bg1').css('background-image', 'url(' + e.target.result + ')').css('background-size', 'cover');
          $('.hero-image, .cta').css('background-image', 'url(' + e.target.result + ')');
          $('#cta-cover').css('background-image', 'url(' + e.target.result + ')').css('background-size', 'cover');
          $('#paraSection').css('background-image', 'url(' + e.target.result + ')').css('background-size', 'cover');
         };
     
     reader.readAsDataURL(file);
   });

/**DRAGGABLE */
   var dragg = function(){
    return {
      diffX : 0,
      diffY : 0,
      move : function(divid,xpos,ypos){
        var a = $(divid);
        $(divid).css({left: xpos + 'px', top: ypos + 'px'});
      },
      startMoving : function(evt){
        //alert('blaat');
        //alert(evt.clientX);
        evt = evt || window.event;
        if(evt.originalEvent.touches) {
          var touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
          if(touch)
            evt = touch;
        }
        var posX = evt.clientX,
            posY = evt.clientY,
            a = $('.crop-image'),
            divTop = a.css('top'),
            divLeft = a.css('left')
        
        divTop = divTop.replace('px','');
        divLeft = divLeft.replace('px','');
        dragg.diffX = posX - divLeft,
        dragg.diffY = posY - divTop;
        
        var mouseMoveEventType=((document.ontouchmove!==null)?'mousemove':'touchmove');
        $(document).on(mouseMoveEventType, dragg.mouseMoving);
      },
      mouseMoving : function(evt){
        evt = evt || window.event;
        if(evt.originalEvent.touches) {
          var touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
          if(touch)
            evt = touch;
        }
  /*      console.log(evt);
        console.dir(evt);*/
        var posX = evt.clientX,
            posY = evt.clientY,
            aX = posX - dragg.diffX,
            aY = posY - dragg.diffY;
  /*      console.log([aX, aY]);*/
        dragg.move('.crop-image',aX,aY);
      },
      stopMoving : function(){
        var a = document.createElement('script');
        
        var mouseMoveEventType=((document.ontouchmove!==null)?'mousemove':'touchmove');
        $(document).off(mouseMoveEventType, dragg.mouseMoving);
      },
    }
  }();
  
  $(function() {
    var a = document.createElement('script');
    a.src = 'https://dev.elobbies.com/scripts/jgestures/jgestures.js';
    document.body.appendChild(a);
    var mouseDownEventType=((document.ontouchstart!==null)?'mousedown':'touchstart');
    var mouseUpEventType=((document.ontouchend!==null)?'mouseup':'touchend');
    $('.shine-through').on(mouseDownEventType, dragg.startMoving);
    $('body').on(mouseUpEventType, dragg.stopMoving);
    
  });
 });