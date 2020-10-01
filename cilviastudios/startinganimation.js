const animation = Object.create(null);
const el = (id) => document.getElementById(id);
// intial animation works only on Mozzila for some reason
// this uses the requestAnimationFrame to rerender the svg,
// by iterating its scale and making it smaller. the container
// and svg are then turned to 0 opacity and displayes as none,
// just as the logo scales to 0, by the use of the 1500 timeout.
animation.init = function () {
    const cilvialogo = el("cilviasvg");
    const background = el("loadingscreen");
    const startAnimation = function () {
        const animate = function () {
            const opacitychange = function () {
                cilvialogo.style.opacity = 0;
                background.style.opacity = 0;
                cilvialogo.style.display = "none";
                background.style.display = "none";
            };
            setTimeout(opacitychange, 1500);
            // window.requestAnimationFrame(animate);
        };
        window.requestAnimationFrame(animate);
    };
    startAnimation();
    let scalenum = 1;
    const scale = function () {
        cilvialogo.style.scale = scalenum;
        window.requestAnimationFrame(scale);
        scalenum += -0.011;
    };
    setTimeout(scale, 0);
};

export default Object.freeze(animation);

