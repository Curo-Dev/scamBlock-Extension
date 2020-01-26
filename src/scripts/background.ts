import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener((details) => {
    browser.contextMenus.create({
        type: 'normal',
        title: 'Hello, World! %s',
        id: 'myContextMenuItem',
        targetUrlPatterns: ["https://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&*"],
        contexts: ['link']
      }, function () {
        console.log('contextMenus are create.');
    });

    console.log('onInstalled....');
});

function onClickHandler(info, tab) {
    console.log(info);            
}

browser.contextMenus.onClicked.addListener(onClickHandler);
  

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    console.log(request);
    
    return Promise.resolve('got your message, thanks!');
});


