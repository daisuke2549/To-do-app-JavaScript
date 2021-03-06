const onClickAdd = () =>  {
    //テキストボックスの値を取得し、初期化する//
    // alert();
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text"). value = "";
    // alert(inputText);

    createIncompleteList(inputText);
};


//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
     document.getElementById("incomplete-list").removeChild(target);
}



//未完了リストに追加する関数
const  createIncompleteList = (text)  =>  {
// div 生成 //
const div  = document.createElement("div");
div.className = "list-row"
// console.log(div);


// liタグ生成　 //
const li = document.createElement("li");
li.innerText = text;
//button(完了) タグ生成
const completeButton =  document.createElement("button");
completeButton.innerText = "完了";
completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    
const addTarget  = completeButton.parentNode;
const text = addTarget.firstElementChild.innerText;
  //div以下を初期化
  addTarget.textContent  = null;
          // liタグ生成　 //
          const li = document.createElement("li");
          li.innerText = text;
//button(削除) タグ生成

 //button タグ生成
 const backButton = document.createElement("button");
 backButton.innerText = "戻す";
 backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグ(div)を完了リストから削除
    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);
    //テキスト取得
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncompleteList(text);
});






 addTarget.appendChild(li);
 addTarget.appendChild(backButton);
 document.getElementById("complete-list").appendChild(addTarget)
});

　　const deleteButton = document.createElement("button");
deleteButton.innerText =  "削除";
deleteButton.addEventListener("click", ()  =>  {
      deleteFromIncompleteList(deleteButton.parentNode);
});


// divタグの子要素に各要素を設定  
div.appendChild(li);
div.appendChild(completeButton);
div.appendChild(deleteButton);
//未完了のリストに追加 
document.getElementById("incomplete-list").appendChild(div);
};





document.getElementById("add-button").addEventListener("click", () => onClickAdd());




      // 読込
      function load() {
        var mydata = "";
        if(!localStorage.getItem('mydata')) {
          mydata = "データがありません";
        } else {
          mydata = localStorage.getItem('mydata');
        }
        console.log(`mydata= ${mydata}`);
        document.getElementById("mydata_out").innerHTML = mydata;
      }
      // 保存
      function save() {
        var mydata = document.getElementById("mydata_in").value;
        console.log(`mydata_in = ${mydata_in}`);
        localStorage.setItem('mydata', mydata);
      }