var previousScrollPosition = window.pageYOffset;
window.onscroll = function() 
{
    var currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition)
    {
        document.getElementById("navigation-bar").style.top = "0";
    }
    else 
    {
        document.getElementById("navigation-bar").style.top = "-50px";
    }
    previousScrollPosition = currentScrollPosition;
}