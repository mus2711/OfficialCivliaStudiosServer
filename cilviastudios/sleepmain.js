import styling from "./stylingtwo.js";
import feedbackUI from "./feedbackUI.js";

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMloaded");
    styling.init();
    feedbackUI.init("/sleep");
});

