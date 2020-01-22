import browser from 'webextension-polyfill';

document.addEventListener('DOMContentLoaded', async () => {
    const tabs = await browser.tabs.query({
        active: true,
        lastFocusedWindow: true,
    });

    const url = tabs.length && tabs[0].url;

    const response = await browser.runtime.sendMessage({
        msg: 'asdasdas',
        url,
    });
    
    

    function getword(info,tab) {
        console.log("Word " + info.selectionText + " was clicked.");
        browser.tabs.create({  
            url: "http://www.google.com/search?q=" + info.selectionText,
        });           
    }
    
    browser.contextMenus.create({
        title: "Search: %s", 
        contexts:["selection"], 
        onclick: getword,
    });
    

    // eslint-disable-next-line no-console
    console.log(response);
});
