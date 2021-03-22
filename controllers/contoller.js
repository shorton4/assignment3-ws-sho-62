exports.add = function(req, res)  {
    console.log("added");


    //fix the following
    var result = (parseFloat(req.body.operand1) + parseFloat(req.body.operand2));
    
    res.header("Content-Type: application/json");
    res.send({"result" : result}); 
}

