import browser from 'webextension-polyfill';

const iframe = document.getElementById('cafe_main');

iframe.onload = function() {  
  let body = iframeRef(iframe)
  
  const BoardTitle = body.querySelector("#sub-tit > div.title_area > div > h3") ;
  if(BoardTitle != null) { // 게시판 여부                            
    console.log(body.querySelector("#sub-tit > div.title_area > div > h3").textContent);
    
    let postList = body.querySelectorAll("#main-area > div:nth-child(7) > table > tbody > tr");
    if(BoardTitle.textContent == "전체글보기") postList = body.querySelectorAll("#main-area > div:nth-child(6) > table > tbody > tr");

    
    for(let i = 0; i < postList.length; i++){
      const row = postList[i];
      const userElement = row.querySelector("td.td_name > div > table > tbody > tr > td > a");
      const id = userElement.getAttribute('onclick').split(",")[1].trim().replace(/[']/g, "");            

      userElement.addEventListener("click", () => {            
        const repeat = setInterval(() => {
          console.log("Repeat Ready");
          if(body.querySelector("div.perid-layer > ul") != null) {                        
            clearInterval(repeat);            
            if(body.querySelector("li.blackUser") == null) {
              const blackElement = document.createElement('li')            
              blackElement.className = "blackUser";
              blackElement.innerHTML = `<a href="#" data-user="${id}">⛔ 사용자 차단</a>`;
              const listElement = body.querySelector("div.perid-layer > ul");            
              listElement.append(blackElement); 
              listElement.querySelectorAll("li").forEach(le => { le.style.fontSize = "11px" });
              console.log(listElement);          
            
              blackElement.addEventListener("click", () => {
                browser.storage.local.set({blockUsers: [id]}).then(() => {
                  console.log(`Block ${id} OK`);
                }, (error) => {
                  console.log(error);
                });
                body.querySelector("div.perid-layer").style.display = "none";
              });
            }  
          }
        }, 100)
      });

      // 차단 부분
      browser.storage.local.get("blockUsers").then((user) => {             
        console.log(user);
        
        const users = user.blockUsers.filter(user => user == id);               
        if (users.length > 0) {
          row.hidden = true;
          console.log(`${id} is Blocked!`);
        }          
      }, (err) => {
        console.log(err);      
      });
    }
    
    
  } else {
    console.log("게시판이 아닙니다.");    
  };
}

function iframeRef(frameRef) {
  return frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument
}