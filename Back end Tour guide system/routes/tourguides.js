const router = require("express").Router();
let tourguide = require("../models/tourguide");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const nic = req.body.nic;
    const age = Number(req.body.age);
    const contact = req.body.contact;
    const tour_guide_type = req.body.tour_guide_type;
    const language = req.body.language;
    const tour_guide_id = req.body.tour_guide_type;

    const newtourguide = new tourguide({

        name,
        nic,
        age,
        contact,
        tour_guide_type,
        language,
        tour_guide_id,

    })

    newtourguide.save().then(()=>{
        res.json("Tourguide added")
    }).catch((err)=>{
        console.log(err);

    })

})



router.route("/").get((req,res)=>{
    tourguide.find().then((tourguides)=>{
        res.json(tourguides)
    }).catch((err)=>{
        console.log(err)
    })

})



module.exports = router