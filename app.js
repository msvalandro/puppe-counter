const path = require('path');

const express = require('express');

const app = express();

let contador = new Date();
let recorde = 0;
let contadorTexto;
let recordeTexto;

const dateDiff = () => {
	const now = new Date().getTime();
	const countdown = contador.getTime();

	const distance = now - countdown;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	contadorTexto = `${days}d ${hours}h ${minutes}m ${seconds}s`;

	if (distance > recorde) {
		recorde = distance;
		recordeTexto = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}
};

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	dateDiff();

	res.render('main', {
		contadorTexto,
		recordeTexto,
		contador,
		recorde
	});
});

app.post('/zera-contador', (req, res, next) => {
	dateDiff();
	contador = new Date();
	res.redirect('/');
});

app.listen(process.env.PORT || 3000);