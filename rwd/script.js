(async function () {

  const lauchBurguerMenu = function () {
    // Burguer button & menu
    const $burguerButton = document.querySelector('.icon-menu');
    const $menu = document.querySelector('.header .menu');
    
    // activate menu
    $burguerButton.addEventListener('click', function(event) {
      $menu.classList.toggle('is-active');
    });

    // auto hide menu on click
    $menu.querySelectorAll('a').forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        $menu.classList.remove('is-active');
      })
    })
  }

  const validateDevice = function (device, callback) {
    if (device.matches) {
      callback();
    } else{
      device.addListener(function (event) {
        if (event.matches) {
          callback(); 
        }     
      });
    }
  }

  const mobileMedia = window.matchMedia('screen and (max-width: 479px)');
  validateDevice(mobileMedia, lauchBurguerMenu);
  

}())
