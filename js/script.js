$(document).ready(function() {

  $("#button").click(function(){
    $('html, body').animate({scrollTop: $("footer").offset().top}, 2000);
  });


  $(window).scroll(function() {
    $('.hide').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window > bottom_of_object) {
        // $(this).animate({top,'+=50px'}, 800);
        $(this).animate({'opacity':'1'},800);
        // $(this).fadeIn(function(){
        //   $(this).css({'margin-top':'+50px'}, 800);
        // });
      }
    });
  });
});
