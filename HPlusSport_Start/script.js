//following the solution video for Lynda.com challenge
//added 10.1 & 10.2 exercise js
        //copied from finished 10.1 & 10.2 exercises
     $(function () {
            $("#products h2.product-name[data-type='mineralwater']").css("background-color", "#2982D0");
            $("#products h2.product-name[data-type='vitamin']").css("background-color", "#12500F");
            $("#products h2.product-name[data-type='proteinbar']").css("background-color", "#4E0F50");

            document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
                updateProductView("vitamins", evt.target.checked);
            });
            document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
                updateProductView("mineralwater", evt.target.checked);
            });
            document.querySelector('#cbProtein').addEventListener('change',function (evt) {
                updateProductView("proteinbar", evt.target.checked);
            });

//exercise 11.1

$("product-item").each(function () {
    var prodName = 
        encodeURIComponent($(this).children("h2").text());
    var prodID = 
        encodeURIComponent($(this).data("prod_id"));
    
    var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
    $(this).children("img").wrap(link);    
    })
})
         
        function updateProductView(categoryName, bVisible) {
            var dataSelectorVal = "";
            switch (categoryName) {
                case "vitamins":
                    dataSelectorVal = "h2[data-type='vitamin']";
                    break;
                case "mineralwater":
                    dataSelectorVal = "h2[data-type='mineralwater']";
                    break;
                case "proteinbar":
                    dataSelectorVal = "h2[data-type='proteinbar']";
                    break;
                    }
         
         $("product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
                 }


//product js & jQuery

    var paramLoc = window.location.href.indexOf("?");
    var paramStr = window.location.href.slice(paramLoc+1);
    var prodName = "";
    var prodID = "";
    
    //prodName
    var i = paramStr.indexOf("prodName=")+9;
    for (var j = i; j<paramStr.length; j++) {
        if (paramStr.charAt(j) == "&")
            break;
        prodName += paramStr.charAt(j);
    }    
    
    //prodID
    var i = paramStr.indexOf("prodID=")+7;
    for (var j = i; j < paramStr.length; j++){
        if (paramStr.charAt(j) == "&")
            break;
        prodID += paramStr.charAt(j);
    }
    
    prodName = decodeURIComponent(prodName);
    prodID = decodeURIComponent(prodID);
    
    $("#productName").text(prodName);
    