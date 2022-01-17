$(document).ready(function () {
  
    $(".slider-slick").slick({
        dots: true,
        slidesToShow: 2, //хз, как выводить только 3 точки. Увеличить слайдскролл - не вариант
        slidesToScroll: 1,
        speed: 600,
        easing: "linear",
        variableWidth: true,

    });
});



/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */

// PRODUCT
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.footer-title_nav')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  //ENGAGE
  function myFunctions() {
    document.getElementById("myDropdowns").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.footer-title_nav')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  //EARN MONEY
  function myFunctionz() {
    document.getElementById("myDropdownz").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.footer-title_nav')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 
  //бургер
  let menuBtn = document.querySelector('.burger-btn');
  let menu = document.querySelector('.nav');
  let control = document.querySelector('.control');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    control.classList.toggle('active');
  })
  