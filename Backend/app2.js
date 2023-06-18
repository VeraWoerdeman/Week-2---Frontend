// in app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('/../../api.js');  // Het pad moet relatief zijn aan de huidige locatie


const app = express(); 
const router = express.Router();  // Maak de router hier aan.
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

apiRoutes.init(router);  // Roep de init functie aan op het geïmporteerde object.
app.use('/', router);  // Gebruik de router, die nu de routes heeft.

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
