/* $('.svg-menu img').click(function() {
   $('.content-container').toggleClass("anim"); 
   $('#reveal1').toggleClass("anim"); 
   $('#reveal2').toggleClass("anim");  
   $('#reveal3').toggleClass("anim");
   $('#menu-content').toggleClass("anim");  
  
}); */


document.querySelector('.menu-button').addEventListener('click', function () {
  console.log('Bouton cliqué!');
  $('.content-container').toggleClass("anim"); 
   $('#reveal1').toggleClass("anim"); 
   $('#reveal2').toggleClass("anim");  
   $('#reveal3').toggleClass("anim");
   $('#menu-content').toggleClass("anim");  
});

// Force click rather than defining function and calling it simply for demo purposes, as it would have no `this` value if called directly which swaps the image for the menu button in this quick-and-dirty version
/* $(function() {
  setTimeout(function() {
    $('.svg-menu img').click();
  }, 400);
}); */

const scrollIndicator = document.querySelector('.scroll-indicator');

scrollIndicator.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight, // Fait défiler à la hauteur de la première section
    behavior: 'smooth'
  });
});






