var itemSelect = document.getElementById("item-list");
var sel,price;
function priceTag(){
    sel = itemSelect.options[itemSelect.selectedIndex].value;
    price = document.getElementById("itemNum");
    if(sel== "item-demo-1"){
    price.value = "$199";
    console.log(price.value);
    }if(sel== "item-demo-2"){
        price.value = "$499";
        console.log(price.value);
        }if(sel== "item-demo-3"){
            price.value = "$999";
            console.log(price.value);
            }if(sel== "item-demo-4"){
                price.value = "$1499";
                console.log(price.value);
                }if(sel== "item-demo-5"){
                    price.value = "$99";
                    console.log(price.value);
                    }if(sel== "item-demo-6"){
                        price.value = "$699";
                        console.log(price.value);
                        }if(sel== "item-demo-7"){
                            price.value = "$59";
                            console.log(price.value);
                            }if(sel== "item-demo-8"){
                                price.value = "$39";
                                console.log(price.value);
                                }if(sel== "item-demo-9"){
                                    price.value = "$299";
                                    console.log(price.value);
                                    }
}