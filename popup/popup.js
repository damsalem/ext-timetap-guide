chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;

    var customText;

    switch (true) {
        case currentUrl.includes("example.com"):
            customText = "Custom text for example.com";
            break;
        case currentUrl.includes("google.com"):
            customText = "Custom text for google.com";
            break;
        case currentUrl.includes("example2.com"):
            customText = "Custom text for example2.com";
            break;
        // Add more cases as needed for other pages
        default:
            customText = "Custom text for all other pages";
            break;
    }

    document.getElementById("custom-text").innerText = customText;
});
