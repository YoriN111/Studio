document.addEventListener("DOMContentLoaded", function (){
let popup=document.getElementById("popup");
    let set_popup=setInterval(function(){
        popup.classList.toggle("show");
        document.getElementById("overlay").classList.toggle("hide")
        clearInterval(set_popup);
    },2000);
    let exit_popup=document.getElementById("popup-exit");
    exit_popup.addEventListener("click",function(){
        popup.classList.toggle("show");
        document.getElementById("overlay").classList.toggle("hide")

    })
});