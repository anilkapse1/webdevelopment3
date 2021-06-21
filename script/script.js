function openNav() {
    document.getElementById("myNav").style.left = "0";
}

function closeNav() {
    document.getElementById("myNav").style.left = "-100%";
}


// slick slider start
$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth:true,
    infinite: true
  });
});
// slick slider end
