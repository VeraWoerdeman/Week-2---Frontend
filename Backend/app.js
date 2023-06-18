const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const collectionRoutes = require('./app/Routes/collectionRoutes');
const router = express.Router();  
const app = express();

const routePrefix = '/api/v1';
app.use(express.json());
app.use(cors());

router.use('', collectionRoutes);
app.use(router)

app.use(bodyParser.urlencoded({extended:true}))


app.start = (port) => {
    port = port || 4001;
    app.listen(port, () => console.log(`App listening on port ${port}`));
};

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.get('/', function (req, res) {
    res.redirect(routePrefix);
});

// Set api versioning
app.use(routePrefix, router);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

module.exports = app;

app.start();
