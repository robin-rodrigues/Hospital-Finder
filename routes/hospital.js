var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");



router.get("/", function(req, res){
    let coordinates = {}
    let nearHospitals = []
        coordinates.latitude = 19,
        coordinates.longitude = 72
    
    Hospital.find({}, function(err, allHospitals){
        if(err){
            console.log(err);
            
        }else{
            for(i=0;i<allHospitals.length;i++) {
            if((coordinates.latitude-Number(allHospitals[i].latitude)<1&&coordinates.longitude-Number(allHospitals[i].longitude)<1)
            &&(coordinates.latitude-Number(allHospitals[i].latitude)>-1&&coordinates.longitude-Number(allHospitals[i].longitude)>-1))
            {
                // console.log(allHospitals[i]);
                nearHospitals.push(allHospitals[i]);
            }
            }
            res.render("hospital", {hospitals: nearHospitals});
        }
    })
})

router.get("/map",function(req,res){
    Hospital.find({},function(err, allHospitals){
        if(err){
            console.log(err);
        }else{
            res.render("map",{hospitals:allHospitals});
        }
    })
})

router.get("/:id",function(req,res){
    Hospital.findById(req.params.id).exec(function(err, foundHospital){
        if(err){
            console.log(err);
        }else{
            console.log(foundHospital);
            res.render("oneHospital",{hospital: foundHospital});
        }
    });
});




module.exports = router;