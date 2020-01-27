const iframe = document.getElementById('cafe_main');

iframe.onload = function() {  
  let body = iframeRef(iframe)



  if(body.querySelector("#sub-tit > div.title_area > div > h3") != null) { // 게시판 여부   
    
    // 게시물 부분

    const postList = body.querySelectorAll("#main-area > div:nth-child(6) > table > tbody > tr");
    for(let i = 0; i < postList.length; i++){
      const row = postList[i];
      const nicknameElement = row.querySelector("td.td_name > div > table > tbody > tr > td > a");
      const nickname = nicknameElement.textContent;

      nicknameElement.addEventListener("click", () => {                        
        setTimeout(() => {
          const blackElement = document.createElement('li')
          blackElement.innerHTML = '<a href="#">사용자블락</a>';          
          const listElement = body.querySelector("div.perid-layer > ul");                              
          listElement.append(blackElement);
          console.log(listElement);
        }, 500);
          
      });

      switch(nickname) {
        case "하니":
          row.hidden = true;                  
          break;
      }
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


