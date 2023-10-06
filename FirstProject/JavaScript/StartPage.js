document.addEventListener("DOMContentLoaded", function (){
    //active slide
    let index=0;
    const pics=document.getElementsByClassName("my-Slides");
    const dots=document.getElementsByClassName("dot");
    const left_arrow=document.getElementById("my-slide-left");
    const right_arrow=document.getElementById("my-slide-right");
    
    left_arrow.addEventListener("click",function(){
        index --;
        if(index<0){
            index=(pics.length-1);
            pics[0].classList.remove("active-myslide")
            dots[0].classList.remove("active-dot");
        }
        else{
            pics[index+1].classList.remove("active-myslide")
            dots[index+1].classList.remove("active-dot");
        }
        pics[index].classList.add("active-myslide");
        dots[index].classList.add("active-dot");
    });
    right_arrow.addEventListener("click",function(){
        index ++;
        if(index>pics.length-1){
            index=0;
            dots[pics.length-1].classList.remove("active-dot");
            pics[pics.length-1].classList.remove("active-myslide")
        }
        else{
            dots[index-1].classList.remove("active-dot");
            pics[index-1].classList.remove("active-myslide")
        }
        pics[index].classList.add("active-myslide");
        dots[index].classList.add("active-dot");
    });
    // active buttons

    //hamburger
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
    
   //Product SLide
   let prodcut_index_first=0;
   let prodcut_index_second=1;
   let prodcut_index_third=2;
   const slides=document.getElementsByClassName("slides-all");
   const slide_left=document.getElementById("slides-left");
   const slide_right=document.getElementById("slides-right");
   slide_right.addEventListener("click",function(){
    prodcut_index_first--
     prodcut_index_second--
    prodcut_index_third--
    if(prodcut_index_first<0)
     {
        prodcut_index_first=slides.length-1;
    }
    if(prodcut_index_second<0)
    {
        prodcut_index_second=slides.length-1;
    }
    if(prodcut_index_third<0)
    {
        prodcut_index_third=slides.length-1;
    }
     console.log(prodcut_index_first,prodcut_index_second,prodcut_index_third)
     product_slide_right(prodcut_index_first,prodcut_index_second,prodcut_index_third,slides)
    })
   slide_left.addEventListener("click",function(){
    prodcut_index_first++
    prodcut_index_second++
    prodcut_index_third++
    console.log("length:"+slides.length)
    if(prodcut_index_first>slides.length-1)
    {
        prodcut_index_first=0;
    }
    if(prodcut_index_second>slides.length-1)
    {
        prodcut_index_second=0;
    }
    if(prodcut_index_third>slides.length-1)
    {
        prodcut_index_third=0;
    }

    console.log(prodcut_index_first,prodcut_index_second,prodcut_index_third)
    product_slide_left(prodcut_index_first,prodcut_index_second,prodcut_index_third,slides)
   })
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
function ChangePic(index){
    const pics=document.getElementsByClassName("my-Slides");
    pics[index].classList.add("active-myslide")
}

//Product SLide
const slide_left=document.getElementById("slides-left");
const slide_right=document.getElementById("slide-right");

  function product_slide_left(prodcut_index_first,prodcut_index_second,prodcut_index_third,slides){
    if(prodcut_index_first-1<0){
        slides[slides.length-1].classList="slides slides-all"

    }
    else{
        slides[prodcut_index_first-1].classList="slides slides-all"

    }
    slides[prodcut_index_first].classList="slides-side slides-left-place slides-all"
    slides[prodcut_index_second].classList="slides-center  slides-all"
    slides[prodcut_index_third].classList="slides-side slides-right-place slides-all "
   
  }  
  function product_slide_right(prodcut_index_first,prodcut_index_second,prodcut_index_third,slides){
    if(prodcut_index_third+1>slides.length-1){
        slides[0].classList="slides slides-all"

    }
    else{
        slides[prodcut_index_third+1].classList="slides slides-all"

    }
    slides[prodcut_index_first].classList="slides-side slides-left-place slides-all"
    slides[prodcut_index_second].classList="slides-center  slides-all"
    slides[prodcut_index_third].classList="slides-side slides-right-place slides-all "
   
  } 
