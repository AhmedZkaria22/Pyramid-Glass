$(document).ready(function(){
    var bol = true,  crItem = "";

    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.ASHTRAY']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .ASHTRAY").fadeIn("slow");
        bol = false; crItem = ".ASHTRAY";
    });


    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.BOWLS7']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .BOWLS7").fadeIn("slow");
        bol = false; crItem = ".BOWLS7";
    });


    var evSourceWeb = $(".products .products_nav ul li button[data-filter = '.BOWLS9']");
    $(evSourceWeb).click(function(){    
        $(".products .products_item_container .products_item").hide(0);
        $(".products .products_item_container .BOWLS9").fadeIn("slow");
        bol = false; crItem = ".BOWLS9";
    });

    
    var evSourceAll = $(".products .products_nav ul li button[data-filter = '*']");
    $(evSourceAll).click(function(){    
        if( bol == false ){
            $(".products .products_item_container .products_item").hide(0);
            $(".products .products_item_container .products_item").fadeIn("slow");   
            bol = true;
        }
        else{
            event.preventDefault();
        }
    });    
});