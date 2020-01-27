import browser from 'webextension-polyfill';

const iframe = document.getElementById('cafe_main');

iframe.onload = function() {  
  let body = iframeRef(iframe)

  // browser.storage.local.get("kitten").then(gotKitten, onError);

  if(body.querySelector("#sub-tit > div.title_area > div > h3") != null) { // 게시판 여부   
    
    // 게시물 부분

    const postList = body.querySelectorAll("#main-area > div:nth-child(6) > table > tbody > tr");
    for(let i = 0; i < postList.length; i++){
      const row = postList[i];
      const userElement = row.querySelector("td.td_name > div > table > tbody > tr > td > a");
      const id = userElement.getAttribute('onclick').split(",")[1].trim().replace(/[']/g, "");            

      userElement.addEventListener("click", () => {            
        const repeat = setInterval(() => {
          console.log("Repeat Ready");
          if(body.querySelector("div.perid-layer > ul") != null) {            
            clearInterval(repeat);
            browser.storage.local.set({id}).then(() => {
              console.log("OK");
            }, (error) => {
              console.log(error);
            });
            if(body.querySelector("li.blackUser") == null) {
              const blackElement = document.createElement('li')            
              blackElement.className = "blackUser";
              blackElement.innerHTML = `<a href="#" data-user="${id}">⛔ 사용자 차단</a>`;
              const listElement = body.querySelector("div.perid-layer > ul");            
              listElement.append(blackElement); 
              listElement.querySelectorAll("li").forEach(le => { le.style.fontSize = "11px" });
              console.log(listElement);          
            
              blackElement.addEventListener("click", () => {
                blockUser(id);            
                body.querySelector("div.perid-layer").style.display = "none";
              });
            }  
          }
        }, 100)
      });

      // switch(nickname) {
      //   case "하니":
      //     row.hidden = true;                  
      //     break;
      // }
    }

    // 게시물 부분 끝
    
    
  } else {
    console.log("게시판이 아닙니다.");    
  };
}

function iframeRef(frameRef) {
  return frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument
}

function blockUser(id){
  console.log(`User Blocked : ${id}`);  
}

