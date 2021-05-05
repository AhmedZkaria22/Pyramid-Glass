let posterImg = $(".services_overview .services_poster > img"),
    posterTitle = $(".services_overview .services_poster .services_poster_controll span"),
    fullScreen = $(".services_overview .services_poster .services_poster_controll button").eq(0),
    btnNxt = $(".services_overview .services_poster .services_poster_controll button").eq(1),
    btnPrv = $(".services_overview .services_poster .services_poster_controll button").eq(2);    
    
function clickImg(number){
    let clickableImg = $(".services_overview .services_poster .services_poster_items img").eq(number);
    clickableImg.on("click",function(){
        posterImg.attr("src", clickableImg.attr("src") );
        posterTitle.text("services-"+ (number+1) +"");
        for(var i=0; i<6; i++){
            if( i == number ){ clickableImg.css("border", "3px solid #a4ba28"); }
            else{
                $(".services_overview .services_poster .services_poster_items img").eq(i).css("border", "none");
            }
        }
    });
}

clickImg(0);    clickImg(1);    clickImg(2);    clickImg(3);    clickImg(4);    clickImg(5);