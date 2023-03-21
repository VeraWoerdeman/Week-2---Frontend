const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const collectionRoutes = require('./Routes/collectionRoutes');

const app = express(); 
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', collectionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome!');
})



app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});