require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handelebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Klein',
		titulo: 'Curso Node | HOME',
	});
});
app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Klein',
		titulo: 'Curso Node | INFO',
	});
});
app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Klein',
		titulo: 'Curso Node | ELEMENTS',
	});
});

// app.get('/generic', (req, res) => {
// 	res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/index', (req, res) => {
// 	res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/elements', (req, res) => {
// 	res.sendFile(__dirname + '/public/elements.html');
// });

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
