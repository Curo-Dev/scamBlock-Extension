const iframe = document.getElementById('cafe_main');

iframe.onload = function() {  
  let body = iframeRef(iframe)
  if(body.querySelector("#sub-tit > div.title_area > div > h3") != null) { // 게시판 여부    
    const noticeList = body.querySelectorAll("#upperArticleList > table > tbody > tr");
    
    for(let i = 0; i < noticeList.length; i++){
      const row = noticeList[i];
      const nickname = row.querySelector("td.td_name > div > table > tbody > tr > td > a").textContent;
   
      switch(nickname) {
        case "비밀의공구":
          row.hidden = true;                      
          break;
      }
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

