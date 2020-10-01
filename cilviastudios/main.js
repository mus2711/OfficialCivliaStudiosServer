import styling from "./stylingtwo.js";
import fronttile from "./interactivefronttile.js";
import email from "./newemail.js";
import access from "./mainaccess.js";
import animation from "./startinganimation.js";


window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMloaded");
    styling.init();
    fronttile.init();
    email.init(0);
    access.init();
    animation.init();
});

