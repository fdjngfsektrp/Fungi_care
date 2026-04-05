  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 
// When the user scrolls down 500px from the top of the document, show the button
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none"; 
  
  }

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 window.scrollTo({top: 0});
}
$(function(){
     $('#open').click(function(){
    $("#mySidenav").addClass('lft');
  });
      $('#close').click(function(){
    $("#mySidenav").removeClass('lft');
  });
 });

	$(window).scroll(function(){
      $('.fade').each(function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window =$(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_object){
          $(this).animate({'opacity':'1'},900);
        }
      });
   });

   $(window).scroll(function(){
      $('.fadee').each(function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window =$(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_object){
          $(this).animate({'opacity':'1'},900);
        }
      });
   });


   const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));