$(document).ready(function(){
    $(".header_sidebarNav").append($(".header_contact1").clone(true));
    //$(".header_sidebarNav").append($(".header_contact2 *div").clone(true));
    //$(".header_sidebarNav").append($(".header_contact2 button").eq(0).clone(true));        
    $(".header_sidebarNav").append($(".header_contact2").clone(true));  
    $(".header_sidebarNav").append($(".header_nav").clone(true));        
    
    $(".header_sidebarNav , .body_overlay , #btn_tgNav").css("display","none");
    

    $(".header_sidebarNav .header_contact1").removeClass("d-none d-lg-flex d-md-none");
    $(".header_sidebarNav .header_contact2 *div").removeClass("d-none d-lg-block d-md-none");
    $(".header_sidebarNav .header_contact2 button").eq(0).removeClass("d-none d-lg-block d-md-none");
    $(".header_sidebarNav .header_contact2 button").eq(1).remove();
    $(".header_sidebarNav .header_nav").removeClass("d-none d-lg-block d-md-none");

    $(".header_sidebarNav .header_contact1").css("display","flex");
    $(".header_sidebarNav .header_contact2 img").css("display","none");
    $(".header_sidebarNav .header_contact2 *div").css("display","block");
    $(".header_sidebarNav .header_contact2 button").eq(0).css("display","block");    
    $(".header_sidebarNav .header_nav").css("display","block");
    $("#btn_tgNav").children().eq(1).css("display","none");

    var tg = false;
    $("#btn_tgNav").on("click",function(){
        //$("body").animate({transform: 'translate(-15rem, 0px)'});     
        if(tg == false){ 
            $("body > .body_overlay, header, main, footer").css("transform",'translateX(-15rem)');
            $("#btn_tgNav").css("right", '16rem'); 
            //$(".body_overlay, .header_sidebarNav").css("display","block");
            $(this).children().eq(0).css("display","none");
            $(this).css("background-color","rgba(114, 114, 114, 0.67)");
            $(this).children().eq(1).css("display","block");
        tg = true;}else if(tg == true){ 
            $("body > .body_overlay, header, main, footer").css("transform",'translateX(0rem)');
            $("#btn_tgNav").css("right", '2rem'); 
            //$(".body_overlay, .header_sidebarNav").css("display","none");         
            $(this).children().eq(1).css("display","none");
            $(this).css("background-color","white");
            $(this).children().eq(0).css("display","block");
        tg = false;}
        
        $(".body_overlay").fadeToggle(500);
        $(".header_sidebarNav").slideToggle(450);

    });

});