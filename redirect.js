window.onload = function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        const url = 'https://12ft.io' + "/" + tabs[0].url
        chrome.tabs.update({ url: url });
    });
};
