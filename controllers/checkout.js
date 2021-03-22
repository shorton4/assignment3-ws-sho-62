//process checkout
//process all the items in the cart against the current inventory and updates it
app.post('/cartSho62/checkout', (req, res) =>{
    var newStockItem = {sku: req.body.sku, name: req.body.name, price: req.body.price, quantity: req.body.quantity};
    stock.push(newStockItem);
    res.header("Content-Type","application/json");
    res.send(inventory);
})



//this need some work