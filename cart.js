var itemSelect = document.getElementById("item-list");
var sel,price;
function priceTag(){
    sel = itemSelect.options[itemSelect.selectedIndex].value;
    price = document.getElementById("itemNum");
    price.value = "299";
    console.log(price.value);
}