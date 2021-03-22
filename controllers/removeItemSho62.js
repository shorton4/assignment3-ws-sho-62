//delete request
//remove item from the cart
//deletes an item from the cart
app.delete('/cartSho62', (req, res) =>{
    let stockItemToDelete = req.body.sku
    stock = stock.filter((car) => stock.sku != stockItemToDelete);
    console.log("Delete request received for item with sku of; " + stockItemToDelete)
    res.header("Content-Type","application/json");
    res.send(JSON.stringify(stock));
})