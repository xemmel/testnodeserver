var express = require('express');

var app = express();

var port = process.env.port || 1234;

var router = express.Router();

router.route('/persons')
    .get(function(req,res) {
          res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Cache-Control','public, max-age=200');
    res.setHeader('Content-Type', 'application/json');
 
    var result = [
        {id: 1, name: "Morten"},
        {id: 2, name: "Clara"},
        {id: 3, name: "Mogens"}
        
    ];
    res.json(result);

    });

app.use('/api',router);

app.get('/',function(req,res) {
    
    res.send(`
        <div>Ja ja </div>
    `);
});

app.listen(port, function() {
    console.log("Server running on port " + port);

});
