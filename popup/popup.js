chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;

    var anchorTag = null;
    var customLink = null;
    var customText = null;

    switch (true) {
        case currentUrl.includes(
            "https://backoffice.timetap.com/backoffice/app/home#/dashboard-setup-guide"
        ):
            customLink =
                "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/31162397/Dashboard";
            customText = "Dashboard";
            break;
        case currentUrl.includes(
            "https://backoffice.timetap.com/backoffice/app/home#/dashboard-gadgets"
        ):
            customLink =
                "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/70516798/Gadgets";
            customText = "Gadgets";
            break;
        case currentUrl.includes(
            "https://backoffice.timetap.com/backoffice/app/home#/dashboard-reports/reports-runner"
        ):
            customLink =
                "https://timetap.atlassian.net/wiki/spaces/TmTapBO/pages/45350930/Reports";
            customText = "Reports";
            break;
        // Add more cases as needed for other pages
        default:
            customText = "Hmm... No relevant articles found.";
            break;
    }

    console.log(document.querySelector("#customLink"));

    if (customLink) {
        anchorTag = document.createElement("a");
        anchorTag.innerText = customText;
        anchorTag.setAttribute("href", customLink);
        anchorTag.setAttribute("target", "_blank");
        var customLink = document.querySelector("#customLink");
        customLink.appendChild(anchorTag);
        console.log(anchorTag);
        return;
    }

    // Handles pages that aren't listed above
    var customLink = document.querySelector("#customLink");
    customLink.innerText = customText;
    var redirectH2 = document.createElement("h2");
    var redirectAnchor = document.createElement("a");
    redirectAnchor.innerText = "Visit TimeTap";
    redirectAnchor.setAttribute(
        "href",
        "https://backoffice.timetap.com/backoffice/app/home"
    );
    redirectAnchor.setAttribute("target", "_blank");
    redirectH2.appendChild(redirectAnchor);
    customLink.insertAdjacentElement("afterend", redirectH2);
});
