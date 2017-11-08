//following the solution video for Lynda.com challenge
 

$("product-item").each(function () {
    var prodName = 
        encodeURIComponent($(this).children("h2").text());
    var prodID = 
        encodeURIComponent($(this).data("prod_id"));
    
    var link = $("<aref='product.html?prodName=" + prodName + "$prodID=" + prodID + "'/>");
    $(this).children("img").wrap(link);    
})