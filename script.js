document.getElementById('link-l').addEventListener('click', function() {
    [
        'https://discord.com/channels/@me',
        'https://ytify.pp.ua/',
        'https://photos.google.com/u/1/?pli=1'
    ].forEach(function(url) {
        chrome.tabs.create({ url: url });
    });
});

document.getElementById('link-m').addEventListener('click', function() {
    var urls = [
        'https://mail.google.com/mail/u/0/#inbox',
        'https://reddit.com',
        'https://app.notesnook.com/notes'
    ];
    chrome.tabs.update({ url: urls[0] });
    urls.slice(1).forEach(function(url) {
        chrome.tabs.create({ url: url });
    });
});

document.getElementById('link-r').addEventListener('click', function() {
    var urls = [
        'https://www.perplexity.ai/',
        'https://web.whatsapp.com',
        'https://gemini.google.com/u/1/app?hl=en-IN&pageId=none'
    ];
    chrome.tabs.update({ url: urls[0] });
    urls.slice(1).forEach(function(url) {
        chrome.tabs.create({ url: url });
    });
});