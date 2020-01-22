import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener((details) => {
    browser.contextMenus.create({
        type: 'normal',
        title: 'Hello, World! %s',
        id: 'myContextMenuItem',
        contexts: ['link']
      }, function () {
        console.log('contextMenus are create.');
    });

    console.log('onInstalled....');
});

function onClickHandler(info, tab) {
    console.log("Word " + info.frameUrl + " was clicked.");
    browser.tabs.create({  
    url: "http://www.google.com/search?q=" + info.frameUrl,
  });  
}

browser.contextMenus.onClicked.addListener(onClickHandler);
  

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    console.log(request);
    
    return Promise.resolve('got your message, thanks!');
});


