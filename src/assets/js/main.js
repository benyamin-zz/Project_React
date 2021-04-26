
$(document).ready(function() {
   'ust strict';
  

   $(window).scroll(function ()   {

       if ($(this).scrollTop() >= 100) {
           $('.menuWrapper.navbar').addClass("navbar-fixed-top ");
           $('.coustom-container').removeClass('container').addClass('container-fluid');
           $('.navbar-nav').css("margin-right","0");
           $(".navbar-brand").css({
             "marginLeft":"15px",
             "transform":"translateX(0%)",
             "opacity":"1"
           });

       } else{
           $('.menuWrapper.navbar').removeClass("navbar-fixed-top");
           $('.coustom-container').removeClass('container-fluid').addClass('container');
            $('.navbar-nav').css("margin-right","-148px");
           $(".navbar-brand").css({
            "transform":"translateX(125%)",
            "opacity":"0"
          });

       }
   });
});
