const PetController = require('../controllers/pet.controller');

module.exports = function(app) {
    app.get('/api', PetController.index);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOnePet);
    app.delete('/api/pet/:id', PetController.deletePet);
    app.put('/api/pet/:id', PetController.updatePet);
}
