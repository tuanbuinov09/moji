function updateBagTotal(){
    const itemTotals = document.querySelectorAll(".card-list__total");
    var bagTotal=0;
    for(var i=0; i<itemTotals.length; i++){
        bagTotal = bagTotal + Number.parseInt(itemTotals[i].innerText.substring(0,itemTotals[i].innerText.length-1));
    }
    document.querySelector(".cart-total").innerText = bagTotal;
}
function updateItemTotal(node){
    const rows = document.querySelectorAll("table tr");
    for(let i=0; i<rows.length; i++){
        if(rows[i].contains(node)){
            var price = rows[i].querySelector(".cart-list__price").innerText;

            var quantity = rows[i].querySelector(".quantity-field").value;
            var total =  Number.parseInt(price.substring(0, price.length -1))*quantity;
            var itemtotal =  rows[i].querySelector(".card-list__total");
            itemtotal.innerText= total +"đ";
            
        }
    }
    updateBagTotal();
}
function incrementValue(e) {
    e.preventDefault();
    var plusButton = e.target;
    var quantity = plusButton.parentNode.querySelector(".quantity-field");
    console.log(plusButton.parentNode)
    var currentVal = parseInt(quantity.value);
    if (!isNaN(currentVal)) {
        quantity.value = currentVal + 1;
    } else {
        quantity.value = 1;
    }
    updateBagCount();
    updateItemTotal(plusButton.parentNode);
    // updateBagCount(parseInt(quantity.value));
}
function updateBagCount() {
    const quantityFields = document.querySelectorAll(".quantity-field");
    var x = 0;
    for (let i = 0; i < quantityFields.length; i++) {
        x = x + Number.parseInt(quantityFields[i].value);
    }
    document.getElementsByClassName("shopping-bag__count")[0].innerText = x + "";
}
function decrementValue(e) {
    e.preventDefault();
    var minusButton = e.target;
    var quantity = minusButton.parentNode.querySelector(".quantity-field");
    console.log(quantity);
    var currentVal = parseInt(quantity.value);
    if (!isNaN(currentVal) && currentVal > 1) {
        quantity.value = currentVal - 1;
    } else {
        quantity.value = 1;
    }
    updateBagCount();
    updateItemTotal(minusButton.parentNode);
    // updateBagCount(parseInt(quantity.value));
}
const plusBtns = document.querySelectorAll(".button-plus");
for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener("click", function (e) {
        incrementValue(e);
    });
}
const minusBtns = document.querySelectorAll(".button-minus");
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", function (e) {
        decrementValue(e);
    });
}

const addtocart = document.querySelector(".add-to-cart");
if (addtocart !== null) {
    addtocart.addEventListener("click", function (e) {
        var quantity = document.querySelector(".quantity-field");
        updateBagCount(parseInt(quantity.value));
    })
}
updateBagTotal();
updateBagCount();