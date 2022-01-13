function inserir(obj) {
	let objeto =  document.querySelector(`p#res`);
	objeto.innerHTML += `${obj}`;
		
}

function apagar() {
	let objeto = document.querySelector(`p#res`);
	objeto.innerHTML = "";
}

function voltar() {
	let objeto = document.querySelector(`p#res`).innerHTML;
	objeto.innerHTML = objeto.substring(0, objeto.length -1);
}



function calcular() {
	let resultado = document.getElementById('res').innerHTML;
	if (resultado) {
		document.getElementById('res').innerHTML = eval(resultado);
	}
}