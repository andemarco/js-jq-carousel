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
var circActive = $('i.active') //dichiaro classe cerchio imgActive
var circNext = circActive.next() //dichiaro cerchio successivo ad active
// COMPORTAMENTO CLICK next
function clickNext(){

}
