const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
})


//Get the button:
const mybutton = document.querySelector('.top-btn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    requestAnimationFrame(() => {
      mybutton.classList.remove("top-btn_normal-scale");
        mybutton.classList.add("top-btn_fadein");
    })  
  } else {
    requestAnimationFrame(() => {
        mybutton.classList.remove("top-btn_fadein");
        mybutton.classList.add("top-btn_normal-scale");
    })
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 