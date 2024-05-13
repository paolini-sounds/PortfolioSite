const logo = document.getElementById('logo');
const menu = document.getElementById('mobile-nav');



//Use Jquery to toggle the mobile menu
$('#menu-icon').click(function () {
    $('#mobile-nav').slideToggle(301)
    if ($("#logo").is(":visible")) {
        $("#logo").hide();
    }
    else $("#logo").delay(300).fadeIn(500);

});


//Hide the mobile menu when the user clicks on a link
document.addEventListener('click', function (event) {
    if (event.target.closest('#mobile-nav') || event.target.closest('#menu-icon') || event.target.closest('#logo')) {
        return;
    }
    menu.style.display = "none";
    logo.style.display = "block";
});

//Hide the mobile menu when the screen is resized
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        $('#mobile-nav').css('display', 'none');
        logo.style.display = "block";
        menu.style.display = "none";
        logo.style.display = "block";
    }
});

//hide the mobile menu when the user clicks outside of the menu
document.addEventListener('click', function (event) {
    if (event.target.closest('#mobile-nav') || event.target.closest('#menu-icon') || event.target.closest('#logo')) {
        return;
    }
    menu.style.display = "none";
    logo.style.display = "block";
});



let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 });
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(TextPlugin)

    let tl = gsap.timeline();
    tl.to('.text', { duration: 7, text: "I'm a Web Developer, Software Developer, and Musician from New Hampshire, USA."});
});


