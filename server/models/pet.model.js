const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, 'Please enter name of pet'],
        minlength : [3, 'Pet name must be at least 3 characters long']
    },
    type : {
        type : String,
        require : [true, 'Please enter type of pet'],
        minlength : [3, 'Pet type must be at least 3 characters long']
    },
    description : {
        type : String,
        require : [true, 'Please enter description of pet'],
        minlength : [5, 'Pet description must be at least 5 characters long']
    },
    skill1 : String,
    skill2 : String,
    skill3 : String

}, { timestamps : true });

module.exports.Pet = mongoose.model('Pet', PetSchema);