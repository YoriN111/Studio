document.addEventListener("DOMContentLoaded", function (){
    
    const light_button=document.getElementById("light");
    const text=document.getElementsByClassName("h1");
    console.log(text.length)
    light_button.addEventListener("click",function(){
       document.body.classList.toggle("dark-mode")
    });
});