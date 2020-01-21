import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
    // eslint-disable-next-line no-console
    console.log('onInstalled....');
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    console.log(request);
    
    return Promise.resolve('got your message, thanks!');
});
