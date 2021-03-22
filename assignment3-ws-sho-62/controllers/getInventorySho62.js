//get inventory
//gets the current inventory
app.post('/inventorySho62', (req, res) =>{
    var stockInventory = {sku: req.body.sku, name: req.body.name, price: req.body.price, quantity: req.body.quantity};
    stock.push(stockInventory);
    res.header("Content-Type","application/json");
    res.send(stock);
})