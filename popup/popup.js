function createLink(customLink, customText) {
    var anchorTag = document.createElement("a");
    anchorTag.innerText = customText;
    anchorTag.setAttribute("href", customLink);
    anchorTag.setAttribute("target", "_blank");
    return anchorTag;
}

function createRedirectH3Link() {
    var h3 = document.createElement("h3");
    var anchorTag = document.createElement("a");
    anchorTag.innerText = "Visit TimeTap";
    anchorTag.setAttribute(
        "href",
        "https://backoffice.timetap.com/backoffice/app/home"
    );
    anchorTag.setAttribute("target", "_blank");
    h3.appendChild(anchorTag);
    return h3;
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;

    var howToLink = document.querySelector("#howToLink");
    var helpLink = null;
    var helpText = null;

    // pageLinks is defined in pageLinks.js which is also imported into popup.html
    if (pageLinks[currentUrl]) {
        helpLink = pageLinks[currentUrl].helpLink;
        helpText = pageLinks[currentUrl].helpText;
        var linkEl = createLink(helpLink, helpText);
        howToLink.appendChild(linkEl);
        return;
    }

    // Handles pages that aren't listed above
    var redirectH3 = createRedirectH3Link();
    howToLink.innerText = "Hmm... No relevant articles found.";
    howToLink.insertAdjacentElement("afterend", redirectH3);
});
