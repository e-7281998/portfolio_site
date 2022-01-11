$(document).ready(function(){
    $(".menu > li ").mouseenter(function(){
        $(this).find(".sub-menu ").stop().slideDown(400);
    });
    
    $(".menu > li ").mouseleave(function(){
        $(this).find(".sub-menu").stop().slideUp(400);
    });
    
    $(".items > li").mouseenter(function(){
        $(this).addClass("items-shadow").children(".info").stop().slideDown(200);
    });
    
    $(".items >li").mouseleave(function(){
        $(this).removeClass("items-shadow").children(".info").stop().slideUp(200);
    });
    
});
