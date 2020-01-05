function setTotal(){
    var t = $("#num");
    var tmp = document.getElementById("totalPrice");//需要修改的總價位置1
    var tmp1 = document.getElementById("totalPrice1");//需要修改的總價位置2
    if(/\D/.test(t.val())){//檢查使用者輸入的值是否是數字
    alert("請您輸入正確的數量！");
    t.val(1);
    tmp.innerHTML = "2488元";
    tmp1.innerHTML = "2488元";
    }
    else{//如果輸入合法     
             if(t.val() > 10){
           confirm("您真的準備一次購買這麼多？");
           tmp.innerHTML = t.val()*2488 +"元";
           tmp1.innerHTML = t.val()*2488 +"元";
              }
    }
}
 
$(function(){ //這裡是加減按鈕都啟用的情況
  var t = $("#num"); 
  $("#add").click(function(){   
    t.val(parseInt(t.val())+1)
    setTotal();
  })
  $("#min").click(function(){
    if(t.val()>1){
    t.val(parseInt(t.val())-1);
    }
    else{
    alert("至少購買一件哦！");
    }
    setTotal();
  })
});