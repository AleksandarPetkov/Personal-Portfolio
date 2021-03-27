$(document).ready(function(){

    // Profile picture increase size //
    
    var profilePicture = $('.profile-picture'), 
    imgWidth = profilePicture.width(),
    imgHeight = profilePicture.height();

    $('.profile-picture').hover(function() {
       $(this).width(imgWidth * 1.5);
       $(this).height(imgHeight * 1.5);      
    }, function() {
       $(this).width(imgWidth);
       $(this).height(imgHeight);
    });


    // Typing text animation script
      
    var typed = new Typed(".typing", {
        strings: ["Java", "Full Stack"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});
