async function depthNavBar() {
    if (window.scrollY > 0) {
        document.querySelector("nav").style.background = 'rgba(0, 0, 0, 0.7)';
        document.querySelector("#topback").style.display = 'flex';
    }
    else {
        document.querySelector("nav").style.background = 'transparent';
        document.querySelector("#topback").style.display = 'none';
    }

    await new Promise(r => setTimeout(r, 100));
    depthNavBar();
}

depthNavBar();