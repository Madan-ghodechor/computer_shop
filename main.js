function openNav()
{
    anime({
        targets:'.RightNavleft',
        translateX:[200, 0],
        easing:'easeInOutQuad',
        duration:1000,
        delay:0,
        opacity:[0,1]
      })

    var target = document.getElementById("navbarSupportedContent");
    target.removeAttribute("class");
    target.setAttribute("class","sideNavComes");
    // document.getElementById('navbarSupportedContent').style.display="inline-block"
}
