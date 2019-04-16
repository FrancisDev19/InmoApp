document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Carrousel

var i = 0;
var images = [];
var time = 3000;

// Image list
images[0] = '/img/carrousel/carrousel (1).jpeg';
images[1] = '/img/carrousel/carrousel (2).jpeg';
images[2] = '/img/carrousel/carrousel (3).jpeg';
images[3] = '/img/carrousel/carrousel (4).jpeg';
images[4] = '/img/carrousel/carrousel (5).jpeg';
images[5] = '/img/carrousel/carrousel (6).jpeg';

// Change image
changeImg = () => {
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;