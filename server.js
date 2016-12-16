var express = require('express');

var app = express();

var port = process.env.port || 1234;


app.get('/',function(req,res) {
    
    res.send(`
        <div>Ja ja </div>
    `);
});

app.listen(port, function() {
    console.log("Server running on port " + port);

});
