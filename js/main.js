const onClickAdd = () =>  {

    //テキストボックスの値を取得し、初期化する//
    // alert();
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text"). value = "";
    // alert(inputText);

    // div 生成 //
    const div  = document.createElement("div");
    div.className = "list-row"
    console.log(div);

 
        // liタグ生成　 //
        const li = document.createElement("li");
        li.innerText = inputText;
        console.log(li); 
     //button タグ生成
     const backButton = document.createElement("button");
     backbutton.innerText = "戻す";


    //button(完了) タグ生成
    const completeButton =  document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {

    

        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        document.getElementById("complete-list").appendChild(addTarget)



        deleteFromIncompleteList(completeButton.parentNode);
        //おされた完了ボタンの親タグ(div)を未完了リストから削除//
        // const addTarget =  completeButton.parentNode;
        // document.getElementById("incomplete-list").removeChild(deleteTarget);

       //完了リストに追加する容姿

       //TODO内容テキストを取得
    //    const text = addTarget.firstElementChild.innerText;


       const addTarget  = completeButton.parentNode;
       const text = addTarget.firstElementChild.innerText;

      //div以下を初期化
      addTarget.textContent  = null;

        // liタグ生成　 //
        const li = document.createElement("li");
        li.innerText = text;
        console.log(li);
       

       HTMLFormControlsCollection.log(text);

    });


    //button(削除) タグ生成
    const deleteButton =  document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        alert("削除");
        //おされた削除ボタンの親タグ(div)を未完了リストから削除//
        deleteFromIncompleteList(deleteButton.parentNode);
        const deleteTarget =  deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
 });


    // divタグの子要素に各要素を設定  
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加 
    document.getElementById("incomplete-list").appendChild(div);
};


// //未完了リストから指定の要素を削除
// const deleteFromIncompleteList = (target) => {
//      document.getElementById("incomplete-list").removeChild(target);
// }



document.getElementById("add-button").addEventListener("click", () => onClickAdd());

