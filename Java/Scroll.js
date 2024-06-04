window.addEventListener("scroll",function(){
    var div = document.querySelector("div");
    div.classList.toggle("abajo",window.scrollY>0);
})