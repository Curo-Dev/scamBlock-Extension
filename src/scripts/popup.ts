import browser from 'webextension-polyfill';

document.addEventListener('DOMContentLoaded', async () => {
  browser.storage.sync.get("blockUsers").then((user) => {
    const array = user.blockUsers;
    if(user.blockUsers && array.length > 0){
      for(let i = 0; i < array.length; i++){
        const user = array[i];
        const userElement = document.createElement('li')            
        userElement.className = "list-item";
        userElement.innerHTML = `${user}`;
        document.querySelector("#list").append(userElement)
      }
    } else {
      const userElement = document.createElement('li')            
      userElement.className = "list-item";
      userElement.innerHTML = `없음`;
      document.querySelector("#list").append(userElement)
    }     
  });
});

document.getElementById("start").onclick = function () {
    browser.storage.sync.clear();
    location.reload();
};


