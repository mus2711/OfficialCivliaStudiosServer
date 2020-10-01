const styling = Object.create(null);
// this function deals with the right side deployment of the navigator.
// this is set by two functions that open and close the nav by setting its
// width as 0 or 50% respectively. This animation from 0 to 50% is done by the
// transition vairbale set in css. The contents of the nav are faded in an out
// depending on close or open nav to prevent the nav "crushing" the list
// visually. The following functions then deal with setting of these functions
// with a click or pressing of enter button for accessibility.
styling.init = function() {
    const el = function (id) {
        return document.getElementById(id);
    };
    function openNav() {
        const elements = document.getElementsByClassName("nav-list");
        for (var i= 0; i < elements.length; i++) {
            elements[i].style.color = "#ffffff"
        }
        document.getElementById("sideNavigation").style.width = "50%";
        for (let item of elements) {
            item.style= (null)
        }
    }
    function closeNav() {
        const elements = document.getElementsByClassName("nav-list");
        for (var i= 0; i < elements.length; i++) {
            elements[i].style.color = "#000000"
        }
        document.getElementById("sideNavigation").style.width = "0%";
    }
    el("circle-base").addEventListener("click", openNav)
    el("circle-nav").addEventListener("click", closeNav)
    el("circle-base").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            openNav();
            break;
        }
    });
    el("circle-nav").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            closeNav();
            break;
        }
    });
    el("main").addEventListener("click", closeNav);
}
export default Object.freeze(styling);

