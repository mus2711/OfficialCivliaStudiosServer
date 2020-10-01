
const fronttile = Object.create(null);

fronttile.init = function () {
    const el = function (id) {
    return document.getElementById(id);
    };
    // this object contains the colour and image path that appears upon
    // hovering of the titles of each project. This makes changing of
    // UI schemes easy to manage.
    const projecttitles = {
        "tg":["./images/project-tile/tg2.png","#A9A9A9"],
        "tb":["./images/project-tile/tb2.jpg", "#8DAAEF"],
        "cs":["./images/project-tile/cs.png", "#222222"],
        "ms":["./images/project-tile/ms.png", "#3d425d"],
        "ub":["./images/project-tile/ub4.jpg", "#ff9533"]
    };
    
    function changePic(link, colour) {
        document.getElementById("base-photo").src = link;
        document.getElementById("project-tile").style.backgroundColor = colour;
    }
    // makes sure the image displayes returns to the original set image
    // when user mouse out from
    function picReturn() {
        // document.getElementById("base-photo").src = "./images/project-tile/stepcomp_2020-May-31_07-04-10PM-000_CustomizedView27083445406_jpg.jpg";
        // document.getElementById("project-tile").style.backgroundColor = "#ffd451";
        document.getElementById("base-photo").src = "./images/project-tile/tb.jpg";
        document.getElementById("project-tile").style.backgroundColor = "#8daaef";
    }
    // sets image back to original when mouse out upon mouseleave event.
    el("project-display").addEventListener("mouseleave", picReturn, false);
    // chnage of colour of tile and displayed image when mousehover over
    // each title.
    el(Object.keys(projecttitles)[2]).addEventListener("mouseover", function(){
        changePic(Object.values(projecttitles)[2][0], Object.values
        (projecttitles)[2][1]);
    }, false);
    el(Object.keys(projecttitles)[0]).addEventListener("mouseover", function(){
        changePic(Object.values(projecttitles)[0][0], Object.values
        (projecttitles)[0][1]);
    }, false);
    el(Object.keys(projecttitles)[1]).addEventListener("mouseover", function(){
        changePic(Object.values(projecttitles)[1][0], Object.values
        (projecttitles)[1][1]);
    }, false);
    el(Object.keys(projecttitles)[3]).addEventListener("mouseover", function(){
        changePic(Object.values(projecttitles)[3][0], Object.values
        (projecttitles)[3][1]);
    }, false);
    el(Object.keys(projecttitles)[4]).addEventListener("mouseover", function(){
        changePic(Object.values(projecttitles)[4][0], Object.values
        (projecttitles)[4][1]);
    }, false);
};

export default Object.freeze(fronttile);

