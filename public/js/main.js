const spanTextContador = document.querySelector('#contador-time').innerHTML;
const contador = new Date(spanTextContador).getTime();
const recorde = document.querySelector('#recorde-time').innerHTML;
const spanContador = document.querySelector('#contador');
const spanRecorde = document.querySelector('#recorde');

const calculaTempo = () => {
	const now = new Date().getTime();
	const distance = now - contador;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	spanContador.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

	if (distance > recorde) {
		spanRecorde.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}
};

setInterval(() => calculaTempo(), 1000);