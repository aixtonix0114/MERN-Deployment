const { Pet } = require('../models/pet.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPet = (req, res) => {
    const { 
        name, 
        type, 
        description,
        skill1,
        skill2,
        skill3,
    } = req.body;
    
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.getAllPets = (req, res) => {
    Pet.find().sort({type:1}).exec()
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators : true})
        .then(updatePet => res.json(this.updatePet))
        .catch(err => res.json(err))
}