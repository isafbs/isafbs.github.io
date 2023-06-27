let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b84c65">Data Analyst and Front-End Developer</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

  