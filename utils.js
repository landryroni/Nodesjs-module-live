function calculateToTalPrice(cart, discountPct=0) {
    let totalPrice =0;
    cart.forEach(function(item){
        totalPrice = item.price * item.quantity;
    });

    let discountAmount = totalPrice * discountPct /100;
    let discountPrice = totalPrice - discountAmount;
    return { totalPrice, discountAmount, discountPrice}
}

module.exports  = {calculateToTalPrice}