/**
 * Created by Viswanathan M B on 16/07/2016.
 */

var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./model/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));
//app.use(require('connect').bodyParser());
app.use('/',router);

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.get("/showall",function(req,res){
    var response = {};
    mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = {"error" : false,"message" : data};
        }
        res.json(response);
    });
});

router.post("/addhealthdata",function(req,res) {
    var db = new mongoOp();
    var response = {};
    console.log(req.body);
    db.username = req.body.name;
    db.shim = req.body.shimmer;
    db.distance = req.body.distancetravelled;

    console.log(req.body.name);
    console.log(req.body.shimmer);
    console.log(req.body.distancetravelled);

    db.save(function (err) {
        if (err) {
            response = {"error": true, "message": "Error adding data"};
        } else {
            response = {"error": false, "message": "Data added"};
        }
        res.json(response);
    });

});

app.listen(8081);
console.log("Data Server Listening to PORT 8081");
