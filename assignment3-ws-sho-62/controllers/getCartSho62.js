//get cart
//returns the shopping cart with relevant data
app.get('/cartSho62', (req,res) =>{
    console.log("GET request for: ");
    console.log(JSON.stringify(stock,null, '\t'));
    res.header("Content-Type","application/json");
    res.send(stock);
})
