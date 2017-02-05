window.onload = function() {
     var el = document.getElementById("hello");
     el.addEventListener("click", function(){
          chrome.browserAction.setTitle({title: "タイトルを変更したよ"});
          
     }, false);

     chrome.tabs.query({active:true}, function(tabs) {
         var tab = tabs[0];
         alert(tab.id);

     });
};