// Fading slideshow
var curIndex = 0;
var nextIndex = 1;
const imgDuration = 3000;
const imgCount = 12;
function slideShow() {
  // Determine if it is the last slide, and set next slide accordingly
  lastSlide = (curIndex + 1 == imgCount);
  if (lastSlide) {
    nextIndex = 0;
  };

  // Fade out current image and promote next image
  const currentImage = document.getElementById(`imageNumber${(curIndex + 1).toString()}`);
  const nextImage = document.getElementById(`imageNumber${(nextIndex + 1).toString()}`);
  currentImage.className = "fadeOut";
  nextImage.className = "nextImage";
  setTimeout(function() {
    currentImage.className = "";
    nextImage.className = "currentImage"
  }, 1000);

  // Increment counters
  curIndex++;
  nextIndex++;
  if (lastSlide) {
    // Wrap around on last slide
    curIndex = 0;
    nextIndex = 1;
  };

  // Wait until next image shall be faded in
  setTimeout(slideShow, imgDuration);
}

// Start slideshow
setTimeout(slideShow, imgDuration);
