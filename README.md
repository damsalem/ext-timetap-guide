# TimeTap Guide

An unofficial guide for [TimeTap](https://timetap.com/) that provides relevant FAQs for each page.

Try out the latest, unpublished version here.

1. Download the ZIP
2. In Chrome, navigate to the [extensions page](chrome://extensions/)
3. At the top right, toggle "Developer mode" to ON.
4. Click on [Load unpacked]
5. Select the ZIP file
6. The install is complete, the extension can be found by clicking on the puzzle icon at the top right of your browser. For easy access, click on the pin icon.

# Coding

The implementation should be fairly simple, provide links to different FAQs based on the URL the visitor is on. Likely, I'll use a switch statement because we'll be handling about a dozen different pages initially and if it is approved, it will scale up to the entire backend.

## ES6 Syntax and Chrome

ChatGPT has just told me that according to Statcounter, only 60% of Chrome users are using the latest version. I visited Statcounter and found that typically less than 50% of users are on the latest version of Chrome.

The following are typical ES6 features that may have limited support:

-   `let` and `const` declarations in `for...in` loops are not supported in Chrome 58 and earlier.
-   Template literals with tagged template syntax are not supported in some older versions of Chrome.
-   `Proxy` objects are not supported in some older versions of Chrome.
-   `async` and `await` keywords are not supported in Chrome 55 and earlier.
-   Some features of the fetch API are not supported in older versions of Chrome.

As a result, I will be using the older ES5 syntax.
