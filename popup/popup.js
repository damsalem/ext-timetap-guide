function createLink(customLink, customText) {
    var anchorTag = document.createElement("a");
    anchorTag.innerText = customText;
    anchorTag.setAttribute("href", customLink);
    anchorTag.setAttribute("target", "_blank");
    return anchorTag;
}

function createRedirectH2Link() {
    var h2 = document.createElement("h2");
    var anchorTag = document.createElement("a");
    anchorTag.innerText = "Visit TimeTap";
    anchorTag.setAttribute(
        "href",
        "https://backoffice.timetap.com/backoffice/app/home"
    );
    anchorTag.setAttribute("target", "_blank");
    h2.appendChild(anchorTag);
    return h2;
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;

    var pageLinks = {
        "https://backoffice.timetap.com/backoffice/app/home#/dashboard-setup-guide":
            {
                helpLink:
                    "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/31162397/Dashboard",
                helpText: "Dashboard",
            },
        "https://backoffice.timetap.com/backoffice/app/home#/dashboard-gadgets":
            {
                helpLink:
                    "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/70516798/Gadgets",
                helpText: "Gadgets",
            },
        "https://backoffice.timetap.com/backoffice/app/home#/dashboard-reports/reports-runner":
            {
                helpLink:
                    "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/45350930/Reports",
                helpText: "Reports",
            },
        // Add more objects as needed for other pages
    };

    var howToLink = document.querySelector("#howToLink");
    var helpLink = null;
    var helpText = null;

    if (pageLinks[currentUrl]) {
        helpLink = pageLinks[currentUrl].helpLink;
        helpText = pageLinks[currentUrl].helpText;
        var linkEl = createLink(helpLink, helpText);
        howToLink.appendChild(linkEl);
        return;
    }

    // Handles pages that aren't listed above
    var redirectH2 = createRedirectH2Link();
    howToLink.innerText = "Hmm... No relevant articles found.";
    howToLink.parentNode.insertBefore(redirectH2, howToLink.nextSibling);
});
