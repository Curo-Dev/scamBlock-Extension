import browser from 'webextension-polyfill';

document.addEventListener('DOMContentLoaded', async () => {
  browser.storage.sync.get("blockUsers").then((user) => {
    const array = user.blockUsers;
    if(user.blockUsers && array.length > 0){
      document.querySelector("#count").innerHTML = `(${array.length}명)`
      for(let i = 0; i < array.length; i++){
        const user = array[i];
        const userElement = document.createElement('li')            
        userElement.className = "list-item";

        const iconElement = document.createElement('i');
        iconElement.className = "fas fa-times-circle";
        iconElement.onclick = () => {
          removeUser(`${user}`);
        }
        userElement.innerHTML = `┖ ${user} `
        userElement.append(iconElement)
        document.querySelector("#list").append(userElement)
      }
    } else {
      const userElement = document.createElement('li')            
      
      userElement.className = "list-item";
      userElement.innerHTML = `없음`;
      document.querySelector("#list").append(userElement)
    }     
  });

  function removeUser(r_user){
    browser.storage.sync.get("blockUsers").then((user) => {
      if (user.blockUsers && user.blockUsers.length > 0) {
        const users = user.blockUsers
          
        const userFilter = users.filter(e => e != r_user);
        browser.storage.sync.set({blockUsers: userFilter})
        location.reload();        
      } else {      
        // browser.storage.sync.clear();
        console.log("전부 초기화");      
      }
    })
  }
});



document.getElementById("folder").onclick = function () {
  const list = document.getElementById("list");
  if(list.getAttribute("class") == "open") {
    list.querySelectorAll("li.list-item").forEach(e => { e.setAttribute("style", "display: none") });
    list.setAttribute("class", "close");
    list.querySelector("li.folder > i").setAttribute("class", "fas fa-folder")
  } else {
    list.querySelectorAll("li.list-item").forEach(e => { e.setAttribute("style", "display: block") });
    list.setAttribute("class", "open");
    list.querySelector("li.folder > i").setAttribute("class", "fas fa-folder-open")
  }   
};


document.getElementById("start").onclick = function () {
    browser.storage.sync.clear();
    location.reload();
};


