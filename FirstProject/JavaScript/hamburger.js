document.addEventListener("DOMContentLoaded", function (){
    const hamburger=document.getElementById("hamburger");
    const exit_nav=document.getElementById("nav-exit");
    let hamburger_bool=false;

    hamburger.addEventListener("click",function(){
        hamburger_bool = !hamburger_bool
        ChangeBurger(hamburger_bool,exit_nav);
})
    exit_nav.addEventListener("click",function(){
        hamburger_bool=false;
        ChangeBurger(hamburger_bool,exit_nav);
    });
});
function ChangeBurger(hamburger_bool,exit_nav){
    const navbar_items=document.getElementById("navbar-items");
    const navbar_buttons=document.getElementsByClassName("navbar-bottom-button");
    if(hamburger_bool){
        navbar_items.style.visibility="visible"
        navbar_items.classList.add("active-hamburger")
        navbar_items.style.animation="fade_in 0.5s"
        exit_nav.style.display="block"
        for(let i=0;i<navbar_buttons.length;i++){
            navbar_buttons[i].classList.add("active-hamburger-button");
        }
    }
    else{
        navbar_items.style.visibility="hidden"
        navbar_items.style.animation="";
        navbar_items.style.visibility="hidden"
        navbar_items.style.animation="";
    }
}