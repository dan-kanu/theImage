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
          $('#bg1').css('background-image', 'url(' + e.target.result + ')');
         };
     
     reader.readAsDataURL(file);
   });
 });