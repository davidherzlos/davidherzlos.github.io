$(document).ready(function(){
  
  // Section scrolling
  $('#home-anchor').on('click', function(e){
    e.preventDefault();
    $('#home').animatescroll();
  });
  $('#portafolio-anchor').on('click', function(e){
    e.preventDefault();
    $('#portafolio').animatescroll();
  });
  $('#experiencias-anchor').on('click', function(e){
    e.preventDefault();
    $('#eventos').animatescroll();
  });
  $('#contacto-anchor').on('click', function(e){
    e.preventDefault();
    $('#contacto').animatescroll();
  });
})
