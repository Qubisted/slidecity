// Show the splash screen when the page loads
window.addEventListener("load", function() {
    var splashScreen = document.getElementById("splash-screen");
    splashScreen.style.display = "block";
  });
  
  // Hide the splash screen after 5 seconds
  setTimeout(function() {
    var splashScreen = document.getElementById("splash-screen");
    splashScreen.style.display = "none";
    startSlideshow();
  }, 2500);
  

// Create an array of slide URLs
var slideUrls = [
    "./images/1.png",
    "./images/2.png",
];

// Create a new image element for each slide
var slides = slideUrls.map(function(url) {
    var img = document.createElement("img");
    img.src = url;
    return img;
});
var slidesDiv = document.getElementById("DiVslides");


// Add the slides to the page
slides.forEach(function(slides) {
    slidesDiv.appendChild(slides);
});

// Show the first slide
slides[0].style.display = "block";

// Set the interval (in milliseconds) at which the slides will change
var interval = 7000;

// Show the next slide
function showNextSlide() {
    // Find the currently-displayed slide
    var currentSlide = null;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            currentSlide = i;
            break;
        }
    }

    // If there is a current slide, hide it and show the next one
    if (currentSlide != null) {
        slides[currentSlide].style.display = "none";
        var nextSlide = (currentSlide + 1) % slides.length;
        slides[nextSlide].style.display = "block";
    }
}

// Set the interval
function startSlideshow() {
    setInterval(showNextSlide, interval);
}

