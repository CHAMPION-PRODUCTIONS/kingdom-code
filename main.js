

var searchTerm = getQueryVariable("q");
if (searchTerm) {
    findAndReplaceDOMText(article, {
        find: new RegExp(searchTerm, "ig"),
        wrap: "span",
        wrapClass: "highlight"
    });
    var highlights = document.querySelectorAll(".highlight");
    if (highlights[0]) {
        highlights[0].scrollIntoView(true);
    }
}
