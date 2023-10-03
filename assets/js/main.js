function openNav() {
    anime({
        targets: '.RightNavleft',
        translateX: [200, 0],
        easing: 'easeInOutQuad',
        duration: 400,
        delay: 0,
        opacity: [0, 1]
    })

    var target = document.getElementById("navbarSupportedContent");
    target.removeAttribute("class");
    target.setAttribute("class", "sideNavComes RightNavleft ");
    // document.getElementById('navbarSupportedContent').style.display="inline-block"
}
function closeNav() {
    var target = document.getElementById("navbarSupportedContent");
    target.removeAttribute("class", "sideNavComes");
    target.setAttribute("class", "collapse navbar-collapse RightNavleft")
    // document.getElementById('navbarSupportedContent').style.display="inline-block"
}
