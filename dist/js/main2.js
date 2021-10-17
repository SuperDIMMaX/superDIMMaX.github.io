const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));


function mobileMenu() {
  var x = document.getElementById("nav_m");
  if (x.style.display === "table-row") {
    x.style.display = "none";
  } else {
    x.style.display = "table-row";
  }
} 