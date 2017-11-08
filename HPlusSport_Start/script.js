//following the solution video for Lynda.com challenge
//added 10.1 & 10.2 exercise js
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



$("product-item").each(function () {
    var prodName = 
        encodeURIComponent($(this).children("h2").text());
    var prodID = 
        encodeURIComponent($(this).data("prod_id"));
    
    var link = $("<aref='product.html?prodName=" + prodName + "$prodID=" + prodID + "'/>");
    $(this).children("img").wrap(link);    
})
     
             })