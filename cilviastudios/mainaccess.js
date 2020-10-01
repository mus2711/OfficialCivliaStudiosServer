const access = Object.create(null);
// This function allows the index.html to conform better to WCAG
// standards, although not recognised by mozilla accessibility,
// this allows tabbing to each interactuve element in the page and
// use of enter button to interact with each element, ie. set off
// side nav.
access.init = function () {
    const el = function (id) {
        return document.getElementById(id);
    };
    el("CilviaOne").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("CilviaOnelink").click();
            break;
        }
    });
    el("tglist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("tg").click();
            break;
        }
    });
    el("mslist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("ms").click();
            break;
        }
    });
    el("cslist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("cs").click();
            break;
        }
    });
    el("tblist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("tb").click();
            break;
        }
    });
    el("ublist").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("ub").click();
            break;
        }
    });
    el("mailelement").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("maillink").click();
            break;
        }
    });
    el("numberelement").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("numberlink").click();
            break;
        }
    });
    el("email-here").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("subscribe-button").click();
            break;
        }
    });
    el("subscribe-button").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("subscribe-button").click();
            break;
        }
    });
    el("buttonbehance").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("behancelink").click();
            break;
        }
    });
    el("lets-grab-coffee").addEventListener("keyup", function (e) {
        var key = e.which || e.keyCode;
        switch (key) {
        case 13:
            console.log("enter pressed");
            document.getElementById("workingon").click();
            break;
        }
    });
};

export default Object.freeze(access);
