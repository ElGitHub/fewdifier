var counter = 0, // current slide
    $items = $('.js-slideshow figure'), // all of the slides
    numItems = $items.length; // number of slides

// show current, hide others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses  modulo to get index of image to show  
   
  $items.removeClass('show'); // remove .show from the image that has it
  $items.eq(itemToShow).addClass('show');    
};

// click for next or previous image
$('.next').on('click', function(){
    counter--;
    showCurrent(); 
});
$('.previous').on('click', function(){
    counter++;
    showCurrent(); 
});

// TouchScreen Options 
if('ontouchstart' in window){
  $('.js-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}