$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".navbar").css("background" , "crimson");
          $(".navbar .logo a span").css("background" , "white");

        }
  
        else{
            $(".navbar").css("background" , "transparent");  
            $(".navbar .logo a span").css("background" , "crimson");	
        }
    })
  })
function openNav(){
    let btn=document.getElementById("mysidebar")
    if(btn.style.left=="-100%")
    {
        btn.style.left="0";
    }
    else
    {
        btn.style.left="-100%";
    }
}