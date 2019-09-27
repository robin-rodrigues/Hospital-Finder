var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");


router.get("/", function(req, res){
    Hospital.find({}, function(err, allHospitals){
        if(err){
            console.log(err);
        }else{
            console.log(allHospitals);
            res.render("hospital", {hospitals: allHospitals});
        }
    })
})

module.exports = router;