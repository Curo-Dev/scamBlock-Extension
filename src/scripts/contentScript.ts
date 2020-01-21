document.getElementById('cafe_main').onload = function() {  
  let body = iframeRef(document.getElementById('cafe_main'))
  if(body.querySelector("#sub-tit > div.title_area > div > h3") != null) { // 게시판 여부
    console.log("게시판 입니다."); 
    
    const notice = body.querySelectorAll("#upperArticleList > table > tbody > tr");
    console.log(notice.length);    

    for(let i = 0; i < notice.length; i++){
      const row = notice[i];
      console.log(row.querySelector("td.td_name > div > table > tbody > tr > td > a").textContent);            
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

