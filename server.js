const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

require('./server/config/mongoose.config');
require('./server/routes/pet.routes')(app);

app.listen (8000, () => {
    console.log("You are listening at port 8000")
})