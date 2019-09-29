var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");
// let filter = {}



router.get("/", function(req, res){
    // console.log(req.qeury)
    let coordinates = {}
    let nearHospitals = []
    let filter ={}
            console.log(req.query)
            if(req.query.public){
                filter.category = req.query.public
            }
            if(req.query.private){
                filter.category = req.query.private
            }
            coordinates.latitude = req.query.latitude,
            coordinates.longitude =req.query.longitude
            console.log(filter.category);
            Hospital.find({
                 category: filter.category
            },
             function(err, allHospitals){
                if(err){
                    console.log(err);
                    
                }else{
                    console.log(allHospitals);
                    for(i=0;i<allHospitals.length;i++) {
                    if((coordinates.latitude-Number(allHospitals[i].latitude)<0.25&&coordinates.longitude-Number(allHospitals[i].longitude)<0.25)
                    &&(coordinates.latitude-Number(allHospitals[i].latitude)>-0.25&&coordinates.longitude-Number(allHospitals[i].longitude)>-0.25))
                    {
                        // console.log(allHospitals[i]);
                        nearHospitals.push(allHospitals[i]);
                        
                    }
                    }
                    res.render("hospital", {hospitals: nearHospitals});        }
    } 
    )}
      
)

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