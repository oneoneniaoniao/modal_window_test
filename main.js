function windowOpen(url) {
  count = window.opener?.count || 0;
  count++;
  const childWindow =  window.open(url, "", "width=500,height=500");
  lockScreen(childWindow);
}

function windowClose(){
  unlockScreen(count);
  window.opener.count--;
  window.close();
}

function lockScreen(childWindow){
  div = document.createElement("div");
  div.id=count;
  div.style.position = "absolute";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.backgroundColor = "black";
  div.style.opacity = "0.5";
  div.style.zIndex = "5";
  div.addEventListener("click",()=>{
childWindow.focus();
  })
  document.body.appendChild(div);
}

function unlockScreen(count){
  opener.document.getElementById(count).remove();
}

(() => {
  const div = document.createElement("div");
  count = window.opener?.count || 0;
  if (count > 1) {
    div.innerHTML = `<div>モーダルを開いたウィンドウは${count}番目のモーダルです。<br>count: ${count}</div>`;
  } else if (count === 1) {
    div.innerHTML = `<div>このモーダルを開いたウィンドウはメインウィンドウです。<br>count: ${count}</div>`;
  } else {
    div.innerHTML = `<div>これはメインウィンドウです。<br>count: ${count}</div>`;
  }
  document.body.appendChild(div);
})();
var c=100
let d = 9
{
  function b(){
    console.log("b")
  }
}
b();

