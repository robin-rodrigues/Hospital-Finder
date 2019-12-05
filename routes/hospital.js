var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");
// let filter = {}

router.get("/", function(req, res){
     console.log(req.qeury)
    let coordinates = {}
    let filter ={}
            console.log(req.query)
            coordinates.latitude = req.query.latitude ? req.query.latitude : 0,
            coordinates.longitude = req.query.longitude ? req.query.longitude : 0
           
            Hospital.find({ 
                    location:{ $near : { $geometry: { type: "Point",  coordinates: [ Number(coordinates.longitude),Number(coordinates.latitude)] },$maxDistance: 500000} }
                }, function(err, allHospitals){
                    if(err){
                        console.log(err);
                    }else{
                        if(req.query.Name){
                            allHospitals = allHospitals.filter(hospital=> hospital.name == req.query.Name);
                        }
                        if(req.query.bloodbank){
                            allHospitals = allHospitals.filter(hospital=> hospital.bloodbank == req.query.bloodbank);
                        }
                        console.log(allHospitals);
                            if(req.query.public && req.query.private){
                                allHospitals = allHospitals;
                            }
                            else {
                                if(req.query.public){
                                allHospitals = allHospitals.filter(hospital => hospital.category == req.query.public);
                                }
                                if(req.query.private){
                                    allHospitals = allHospitals.filter(hospital => hospital.category == req.query.private);
                                }
                            }
                         res.render("hospital", {hospitals: allHospitals});        
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



// router.get("/:id",function(req,res){
//     Hospital.findById(req.params.id).exec(function(err, foundHospital){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(foundHospital);
//             res.render("oneHospital",{hospital: foundHospital});
//         }
//     });
// });


module.exports = router;