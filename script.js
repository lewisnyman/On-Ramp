


(function ($) {
$(document).ready(function() {

window.slider = new Swipe(
  document.getElementById('slider'), {
  callback: function(e, pos) {
    setCurrentSlide(pos);
  },
  }
); 

countSlides();

$("#next").click(function() {
  slider.next();
});

$("#prev").click(function() {
  slider.prev();
});

$("#overlay-disable-message").click(function() {
  $(this).hide();
  $('.modal').hide();
});

});



function countSlides() {
  var count = $('#slider li').length;
  console.log(count);
  output = "<ul class='counter'>";
  for (var i = 0; i < count; i++) {
    if(i == 0){
    output += "<li class='current'>&#9679;</li>";
    }
    else {
    output += "<li>&#9679;</li>";
    }
  }
  output += '</ul>';
  $('.modal').append(output);
}

function setCurrentSlide(pos) {
console.log(pos);
  $('.counter li').removeClass('current');
  $('.counter li:eq(' + pos + ')').addClass('current');
  
}

})(jQuery);