var tabId = null;
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabId = tabs[0].id;
});

document.getElementById('scroll-to-top').addEventListener('click', function () {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: up
    });
});

document.getElementById('scroll-to-bottom').addEventListener('click', function() {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: down
    });
});

function up() {
    window.scrollTo(0, 0);
};

function down() {
    window.scrollTo(0, document.body.scrollHeight);
};