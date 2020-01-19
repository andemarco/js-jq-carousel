// LE FUNZIONI DI CLICK

$(document).ready(function() {
    $(".next").click(
    function(){
      clickNext();
    }
    );
    $(".prev").click(
      function(){
        clickPrev();
      }
    );
// LE FUNZIONI TASTI TASTIERA
    $(document).keydown(
      function() {
        if (event.which == 39) {
          clickNext();
        } else if (event.which == 37) {
          clickPrev();
        }
      }
  );


// CONTENUTO DELE FUNZIONI
    function clickNext() {
      // DICHIARO IMMAGINI SLIDE
      imgActive = $("img.active");
      imgNext = $("img.active").next();
      // DICHIARO CERCHI SLIDE
      var circleActive = $("i.active");
      var circleNext = circleActive.next();

      // DICHIARO FUNZIONI PER AVANZARE SLIDE IMMAGINI
      if (imgActive.hasClass("last")) {
        imgActive.removeClass("active");
        imgNext = $("img.first");
        imgNext.addClass("active");
        circleActive.removeClass("active")
        circleNext = $("i.first");;
        circleNext.addClass("active");
      } else {
        imgActive.removeClass("active");
        imgNext.addClass("active");
        circleActive.removeClass("active");
        circleNext.addClass("active");
      }
    }
    // DICHIARO FUNZIONI IMMAGINE PRECEDENTE
    function clickPrev() {
      // DICHIARO IMMAGINI SLIDE
      imgActive = $("img.active");
      imgPrev = $("img.active").prev();
      // DICHIARO CERCHI SLIDE
      var circleActive = $("i.active");
      var circlePrev = circleActive.prev();

      // DICHIARO FUNZIONI PER AVANZARE SLIDE IMMAGINI
      if (imgActive.hasClass("first")) {
        imgActive.removeClass("active");
        imgPrev = $("img.last");
        imgPrev.addClass("active");
        circleActive.removeClass("active")
        circlePrev = $("i.last");;
        circlePrev.addClass("active");
      } else {
        imgActive.removeClass("active");
        imgPrev.addClass("active");
        circleActive.removeClass("active");
        circlePrev.addClass("active");
      }
    }
  }
);
