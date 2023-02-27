import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//App
const app = express()


//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Template
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


//Static files
app.use(express.static(__dirname + '/public'));


//Rotas
app.get('/', (req, res) => {
    // fetch('http://localhost:3000/animes', {method: 'GET'})
    // .then(response => response.json())
    // .then(response => res.render('index', {dados: response}))

    res.render('index')
});

//Server
app.listen(3000);