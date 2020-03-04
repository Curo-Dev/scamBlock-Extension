import browser from 'webextension-polyfill';

const iframe = document.getElementById('cafe_main');

const title = document.title;
let count = 0;

iframe.onload = function() {    
  let body = iframeRef(iframe)
  const BoardTitle = body.querySelector("#sub-tit > div.title_area > div > h3") ;
  const BoardURL = body.querySelector("#linkUrl");
  const Search = body.querySelector("#main-area > div.search_result");
  if(BoardTitle != null){
    let postList = body.querySelectorAll("#main-area > div:nth-child(7) > table > tbody > tr");
    if(BoardTitle.textContent) postList = body.querySelectorAll("#main-area > div:nth-child(6) > table > tbody > tr");
    for(let i = 0; i < postList.length; i++){
      const row = postList[i];
      const userElement = row.querySelector("td.td_name > div > table > tbody > tr > td > a");
      const id = userElement.getAttribute('onclick').split(",")[1].trim().replace(/[']/g, "");            

      userElement.addEventListener("click", () => {            
        const repeat = setInterval(() => { // repeat Ready          
          if(body.querySelector("div.perid-layer > ul") != null) {                        
            clearInterval(repeat);            
            if(body.querySelector("li.blackUser") == null) {
              const blackElement = document.createElement('li')            
              blackElement.className = "blackUser";
              blackElement.innerHTML = `<a href="#" data-user="${id}">⛔ 사용자 차단</a>`;
              const listElement = body.querySelector("div.perid-layer > ul");            
              listElement.append(blackElement); 
              listElement.querySelectorAll("li").forEach(le => { le.style.fontSize = "11px" });
            
              blackElement.addEventListener("click", () => {
                browser.storage.sync.get("blockUsers").then((user) => {
                  if (user.blockUsers && user.blockUsers.length > 0) {
                    const users = user.blockUsers
                    users.push(id)
                    browser.storage.sync.set({blockUsers: users}).then(() => {
                      row.hidden = true;                      
                    })                                        
                  } else {
                    browser.storage.sync.set({blockUsers: [id]}).then(() => {
                      row.hidden = true;                      
                    })                    
                  }
                })                                                                   
                body.querySelector("div.perid-layer").style.display = "none"; // layer close
              });

            }  
          }
        }, 50)
      });    
      
    browser.storage.sync.get("blockUsers").then((user) => {     
      if (user.blockUsers) {                
        const users = user.blockUsers.filter(user => user == id);               
        if(users.length > 0){
          row.hidden = true;
          count++;                        
          body.querySelector("p#count").innerHTML = `
            <p id="count"> 현재 누적된 차단된 갯수 
              <span style="padding: 5px 10px; border-radius: 50px; font-size: 12px; background-color: orange; color: white;">${count}</span>
            </p>
          `;
          
          document.title = title + ` (${count})`;          
        }
      }
    }, (err) => { console.log(err) });
    }

    
    const newDiv = document.createElement("div");          
          newDiv.style.float = "left";
          newDiv.innerHTML = `
            <p id="count"> 현재 누적된 차단된 갯수 
              <span style="padding: 5px 10px; border-radius: 50px; font-size: 12px; background-color: orange; color: white;">${count}</span>
            </p>
          `;

    body.querySelector("#main-area > div.post_btns").appendChild(newDiv);    
  } else if(BoardURL != null) { // 게시판 여부          
      const userElement = body.querySelector("div > div > div.etc-box > div.fl > table > tbody > tr > td.m-tcol-c.b.nick > table > tbody > tr > td.p-nick > a");
      const id = userElement.getAttribute('onclick').split(",")[1].trim().replace(/[']/g, "");            

      userElement.addEventListener("click", () => {            
        const repeat = setInterval(() => { // repeat Ready          
          if(body.querySelector("div.perid-layer > ul") != null) {                        
            clearInterval(repeat);            
            if(body.querySelector("li.blackUser") == null) {
              const blackElement = document.createElement('li')            
              blackElement.className = "blackUser";
              blackElement.innerHTML = `<a href="#" data-user="${id}">⛔ 사용자 차단</a>`;
              const listElement = body.querySelector("div.perid-layer > ul");            
              listElement.append(blackElement); 
              listElement.querySelectorAll("li").forEach(le => { le.style.fontSize = "11px" });
            
              blackElement.addEventListener("click", () => {
                browser.storage.sync.get("blockUsers").then((user) => {
                  if (user.blockUsers && user.blockUsers.length > 0) {
                    const users = user.blockUsers
                    users.push(id)
                    browser.storage.sync.set({blockUsers: users}).then(() => {
                      history.go(-2);
                    })                                        
                  } else {
                    browser.storage.sync.set({blockUsers: [id]}).then(() => {
                      history.go(-2);
                    })                    
                  }
                })                                                                                   
              });

            }  
          }
        }, 50)
      });    


  } else if(Search != null) {
    let postList = body.querySelectorAll("#main-area > div.article-board.result-board.m-tcol-c > table > tbody > tr");    
    console.log(postList.length);
    
    for(let i = 0; i < postList.length; i++){
      const row = postList[i];
      const userElement = row.querySelector("td.td_name > div > table > tbody > tr > td > a");
      const id = userElement.getAttribute('onclick').split(",")[1].trim().replace(/[']/g, "");            

      userElement.addEventListener("click", () => {            
        const repeat = setInterval(() => { // repeat Ready          
          if(body.querySelector("div.perid-layer > ul") != null) {                        
            clearInterval(repeat);            
            if(body.querySelector("li.blackUser") == null) {
              const blackElement = document.createElement('li')            
              blackElement.className = "blackUser";
              blackElement.innerHTML = `<a href="#" data-user="${id}">⛔ 사용자 차단</a>`;
              const listElement = body.querySelector("div.perid-layer > ul");            
              listElement.append(blackElement); 
              listElement.querySelectorAll("li").forEach(le => { le.style.fontSize = "11px" });
            
              blackElement.addEventListener("click", () => {
                browser.storage.sync.get("blockUsers").then((user) => {
                  if (user.blockUsers && user.blockUsers.length > 0) {
                    const users = user.blockUsers
                    users.push(id)
                    browser.storage.sync.set({blockUsers: users}).then(() => {
                      row.hidden = true;                      
                    })                                        
                  } else {
                    browser.storage.sync.set({blockUsers: [id]}).then(() => {
                      row.hidden = true;                      
                    })                    
                  }
                })                                                                   
                body.querySelector("div.perid-layer").style.display = "none"; // layer close
              });

            }  
          }
        }, 50)
      });    
      
    browser.storage.sync.get("blockUsers").then((user) => {     
      if (user.blockUsers) {                
        const users = user.blockUsers.filter(user => user == id);               
        if(users.length > 0){
          row.hidden = true;
          count++;                        
          body.querySelector("p#count").innerHTML = `
            <p id="count"> 현재 누적된 차단된 갯수 
              <span style="padding: 5px 10px; border-radius: 50px; font-size: 12px; background-color: orange; color: white;">${count}</span>
            </p>
          `;
          
          document.title = title + ` (${count})`;          
        }
      }
    }, (err) => { console.log(err) });
    }

    
    const newDiv = document.createElement("div");          
          newDiv.style.float = "left";
          newDiv.innerHTML = `
            <p id="count"> 현재 누적된 차단된 갯수 
              <span style="padding: 5px 10px; border-radius: 50px; font-size: 12px; background-color: orange; color: white;">${count}</span>
            </p>
          `;


    body.querySelector("#main-area > div.post_btns").appendChild(newDiv);    
  }
}

function iframeRef(frameRef) { return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument };