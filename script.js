/* var valor1 = prompt('Informe o primeiro valor:');
var valor2 = prompt('Informe o segundo valor:');
var operacao = prompt('Informe a operação:');

if (isNaN(valor1) || isNaN(valor2)) {
	alert('Valor(es) incorreto(s)!');
} else {
	valor1 = parseFloat(valor1);
	valor2 = parseFloat(valor2);
	if (operacao == '+') {
		var resultado = alert(valor1 + valor2); 
	} else if (operacao == '-') {
		var resultado = alert(valor1 - valor2);
	} else if (operacao  == '/') {
		var resultado = alert(valor1 / valor2);
	} else if (operacao  == '*') { 
		var resultado = alert(valor1 * valor2);
	} else {
		alert('Operação inválida!');
	}
} */


function adicionar(numero1, numero2) {
	return numero1 + numero2;
}

function subtrair(numero1, numero2) {
	return numero1 - numero2;
}

function dividir(numero1, numero2) {
	return numero1 / numero2;
}

function multiplicar(numero1, numero2) {
	return numero1 * numero2;
}


window.onload = () => {
	document.getElementById('calcular').onclick = () => {
		let valor1 = document.getElementById('n1').value;
		let valor2 = document.getElementById('n2').value;
		let operacao = document.getElementById('operador').value;
		let resultado;

		if (isNaN(valor1) || isNaN(valor2)) {
			alert('Valor(es) incorreto(s)!');
		} else {

			valor1 = parseFloat(valor1);
			valor2 = parseFloat(valor2);
		}


		if (operacao == 'adicao') {
			resultado = adicionar(valor1, valor2);
		} else if (operacao == 'subtracao') {
			resultado = subtrair(valor1, valor2);
		} else if (operacao == 'divisao') {
			resultado = dividir(valor1, valor2);
		} else if (operacao == 'multiplicacao') {
			resultado = multiplicar(valor1, valor2);
		} else {
			alert('Operação inválida!');
		}
			document.getElementById('spnresultado').innerHTML = 'Resultado: ' + resultado;
	}
}
