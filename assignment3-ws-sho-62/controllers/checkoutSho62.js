//process checkout
//process all the items in the cart against the current inventory and updates it
app.post('/cartSho62/checkout', (req, res) =>{

    res.header("Content-Type","application/json");
    res.send(inventory);
})


