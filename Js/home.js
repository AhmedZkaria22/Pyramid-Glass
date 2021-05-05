function control(String){
    let btnNxt = $(".products_controll_next"),
        btnPrv = $(".products_controll_prev");
    let items = $(".products .products_item_container ."+String+"");
    var counter = 0,    counterPrv = items.length-1,    prvc = false, nxtc = false;
    for(var i=0; i<items.length; i++){
        if(i <= 3){
            items.eq(i).show();
        }else{
            items.eq(i).hide();
        }
    }
    btnNxt.on("click",function(){
        if( prvc == true ){ counter+=1; }
        else{ counter+=0; }
        //if( counter <= items.length-5){ 
            for(var i=counter; i<items.length; i++){
                if(i < counter+4 ){
                    items.eq(i).hide(0);
                } else if(i >= counter+4 && i < counter+8){
                    items.eq(i).fadeIn("slow"); 
                } else if(i >= counter+8){
                    items.eq(i).hide(0);
                }
            }
            if( counter+4 >= items.length ){ counter=items.length-1; }
            else{ counter+=4; }
        //}
        nxtc = true;
    });
    btnPrv.on("click",function(){
        //if( counter >= 4){ 
            if( nxtc == true ){
                if( counter-1 <= -1 ){ counter=0; }
                else{ counter-=1; }
            }else{ counter-=0; }
            for(var i=0; i<items.length; i++){
                if(i > counter ){
                    items.eq(i).hide(0);
                } else if(i <= counter && i > counter-4){
                    items.eq(i).fadeIn("slow"); 
                } else if(i <= counter-4){
                    items.eq(i).hide(0);
                }
            }
            prvc = true;
        //}
    });
}

/*btnNxt.on("click",function(){
    if( counter <= items.length-5){ 
        for(var i=counter; i<items.length; i++){
            items.eq(i).fadeOut("slow");        console.log(i,counter);
            if(i >= counter+4 && i < counter+8){
                items.eq(i).fadeIn("slow");     console.log(i,counter);
                //counter = i;
            } else if(i >= counter+8){
                items.eq(i).fadeOut("slow");    console.log(i,counter);
            }
        }
        if( counter+4 >= items.length ){ counter=items.length-1; }
        else{ counter+=4; }
    }
});
console.log(counter);*/
// 1 2 3 4 C 6 7 8 9
// 

/*btnPrv.on("click",function(){
    //counter+=4;
    if( counter >= 4){ 
        for(var i=counter; i>-1; i--){
            items.eq(i).fadeOut("slow");        
            console.log("prev target group",i,counter);
            // 9 - 5 - 1 
            if(i <= counter-4 && i > counter-8){
                items.eq(i).fadeIn("slow");     
                console.log("target group",i,counter);
                //counter = i;
            } else if(i <= counter-8){
                items.eq(i).fadeOut("slow");    
                console.log("aftr target group",i,counter);
            }
        }
        if( counter-4 <= -1 ){ counter=0; }
        else{ counter-=4; }
    }
});
console.log(counter);*/
$(document).ready(function(){
    control("products_item");
    var bol = true,  crItem = "";

    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.ASHTRAY']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .ASHTRAY").fadeIn("slow");
        control("ASHTRAY")
        bol = false; crItem = ".ASHTRAY";
    });

    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.BOWLS7']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .BOWLS7").fadeIn("slow");
        control("BOWLS7");
        bol = false; crItem = ".BOWLS7";
    });

    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.BOWLS9']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .BOWLS9").fadeIn("slow");
        control("BOWLS9");
        bol = false; crItem = ".BOWLS9";
    });
    
    var evSourceAll = $(".products .products_nav ul li button[data-filter = '*']");
    $(evSourceAll).click(function(){    
        if( bol == false ){
            $(".products .products_item_container .products_item").hide(0);
            $(".products .products_item_container .products_item").fadeIn("slow");
            control("products_item");
            bol = true;
        }
        else{
            event.preventDefault();
        }
    });    
});