//code to autoplay a video
$(function() {
  // Auto play modal video using jQuery
 
  /* Uses the class "video" from <a> tag in the video play section of index.html as a selector.
  When the play icon is clicked, the function below runs.
  The video is opened. 
  theModal is the data-target for the function.
  This plays one time (autoplay is set to one: autoplay=1) and the video plays in the modal. */ 
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

// for ekko Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(){
  event.preventDefault();
  $(this).ekkoLightbox();
});

/*Initializing Slick.js slider
slider is the selector used for jQuery. The testimonials are wrapper in a div with class="slider" on line 129 of about.html.
.slick is called when the js engine gets to  <div class="slider"> in the code.
.slick has some configuration options in a cinfig object:
       "infinite: true"  means that the slider will continue to run o an infinite looop and keep repeating the testionials;
       "slideToShow: 1" means that the testimonials will show on the screen one at a time;
       "slideToScroll : 1" means that the testimonials can be scrolled one at a time;
       */
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});