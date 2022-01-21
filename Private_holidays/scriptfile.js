$(document).ready(function(){
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex <1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        $(".h_slideList li").eq(currentIndex).siblings().fadeOut();
        $(".h_slideList li").eq(currentIndex).fadeIn();
    }, 3500);
});