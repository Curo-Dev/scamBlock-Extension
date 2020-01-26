import browser from 'webextension-polyfill';

browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (changeInfo.status !== 'complete') return;

  browser.tabs.executeScript(tabId, { file:'content_script.js', allFrames: true, runAt: 'document_end' });
});


browser.runtime.onInstalled.addListener((details) => {
    browser.contextMenus.create({
        type: 'normal',
        title: 'Hello, World! %s',
        id: 'add-blacklist',
        targetUrlPatterns: ["https://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&*"],
        contexts: ['link']
      }, function () {
        console.log('contextMenus are create.');
    });

    console.log('onInstalled....');
});

function onClickHandler(info, tab) {
  const req = {
     url: info.pageUrl, cmd: 'add-blacklist' 
  };
  browser.tabs.sendMessage(tab.id, req);

  
}

browser.contextMenus.onClicked.addListener(onClickHandler);

  
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    console.log(request);
    
    return Promise.resolve('got your message, thanks!');
});


browser.extension.onMessage.addListener((req, sender, sendResponse) => {  
  if (req.url !== location.href || req.cmd !== 'add-blacklist') return;

    console.log(contextMenuElement);
  
    return Promise.resolve();
});

