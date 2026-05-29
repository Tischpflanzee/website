function loadPage(name) {
    window.fetch("./pages/" + name + ".html").then(function (response) {
        return response.text();
    }).then(function (data) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const html = $(doc.body).html();
        $("#page").html(html);
        console.log(data);
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

function loadHome() {
    loadPage("home");
}

function loadKernel() {
    loadPage("kernel");
}

function loadRamdisk() {
    loadPage("ramdisk");
}

function loadErsterprozess() {
    loadPage("ersterprozess");
}

function loadPost() {
    loadPage("post");
}

function loadMbr() {
    loadPage("mbr")
}

function loadVorwissen() {
    loadPage("vorwissen")
}
