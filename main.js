$(document).ready(
  // FUNZIONI di CLICK
  // Funzione click NEXT
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );
  //Funzione di Click previous
    $('.prev').click(
      function() {
        clickPrev();
      }
    );
  }
);

var imgActive = $('img.active') //dichiaro classe immagine imgActive
var imgNext = imgActive.next() //dichiaro immagine successiva a active
// COMPORTAMENTO CLICK next
function clickNext(){

}
