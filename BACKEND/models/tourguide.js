const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tourguideSchema = new Schema({

    name: {
        type : String,
        required: true
    },
    nic: {
        
        type : String,
        required: true
    },
   
    age: {
        type : Number,
        required: true
    },
    contact: {
        type : String,
        required: true
    },
    tour_guide_type: {
        type : String,
        required: true
    },
    language: {
        type : String,
        required: true
    },
    
    tour_guide_id: {
        type : String,
        required: true
    }

    

})

const tourguide = mongoose.model("tourguide,", tourguideSchema);

module.exports = tourguide;




