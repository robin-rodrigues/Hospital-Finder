var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");
// let filter = {}


router.get("/", function(req, res){
    // console.log(req.qeury)
    let coordinates = {}
    let nearHospitals = []
    let filter ={}
        if(req.query.latitude || req.query.longitude){
            // console.log(req.query.latitude)
            filter.latitude= req.query.latitude,
            filter.longitude= req.query.longitude
            coordinates.latitude = filter.latitude,
            coordinates.longitude = filter.longitude

            Hospital.find({}, function(err, allHospitals){
                if(err){
                    console.log(err);
                    
                }else{
                    for(i=0;i<allHospitals.length;i++) {
                    if((coordinates.latitude-Number(allHospitals[i].latitude)<0.25&&coordinates.longitude-Number(allHospitals[i].longitude)<0.25)
                    &&(coordinates.latitude-Number(allHospitals[i].latitude)>-0.25&&coordinates.longitude-Number(allHospitals[i].longitude)>-0.25))
                    {
                        // console.log(allHospitals[i]);
                        nearHospitals.push(allHospitals[i]);
                    }
                    }
                    res.render("hospital", {hospitals: nearHospitals});
        }
    } 
    )}else{
        
    }
      
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