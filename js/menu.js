function highlight(target) {
    menu = ['Home', 'About', 'Socnet', 'Contact'];
    for (let item of menu) {
        let query = '#' + item;
        if (item === target) {
            $(query).css('color','#2A09B2');
            $(query).css('font-weight','bold');
        }
        else {
            $(query).css('color','#000');
            $(query).css('font-weight','normal');
        }
    }
}

$(window).scroll(function() {
    var scrolledFromTop = $(window).scrollTop();
    var onAbout = $('#AboutDivider').offset().top;
    var onSocnet = $('#SocnetDivider').offset().top;
    var onContact = $('#ContactDivider').offset().top;

    // adjust for menu click
    var klick = 4;
    
    if (scrolledFromTop < onAbout-klick) {
        console.log('on header');
        highlight('Home');
    }
    else if (scrolledFromTop > onAbout-klick && scrolledFromTop < onSocnet-klick) {
        console.log('about');
        highlight('About');
    }
    else if (scrolledFromTop > onSocnet-klick && scrolledFromTop < onContact-klick) {
        console.log('Socnet');
        highlight('Socnet');
    }
    else if (scrolledFromTop > onContact-klick) {
        console.log('Contact');
        highlight('Contact');
    }

});

// Simpler smooth scrolling
// https://stackoverflow.com/a/66262605
// by Giacomo Casadei

$(document).ready(function(){
  // Add smooth scrolling to all links with the class scroll
  $("a.smoothScroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});