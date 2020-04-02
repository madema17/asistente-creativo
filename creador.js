/*  
    App que sirve como soporte para el proceso creativo, de generación de acordes para canciones
*/

/**
 * Contiene todos los nombres de las notas musicales
 */
const notas = ['do','do#','re','re#','mi','fa','fa#','sol','sol#','la','la#','si'];

const relacionDalticaCromatica = [1:1,2:3,3:5,4:6,5:7,6:9,7:11,8:1];


function dameSecuenciaDeAcordesDeUnAcorde(dominante, mayor) {
  let secuencia = [1,4,5,1];
  let traspasoANotas = secuencia.map(function(nro) {
    return relacionDalticaCromatica[nro];
  });
  let secuenciaAcordes = traspasoANotas.map(function(nro) {
    return this.dameNotaNro(dominante,nro);
  });
  return secuenciaAcordes;
}

function dameNotaNro(nota, nro){
  let index = notas.indexOf(nota);
  nroNota = index + nro -1;  
  if(nroNota > 11){
    nroNota = nroNota - 12;
  }
  return notas[nroNota];
}

function dameNotasNro(nota, nros){
	notasPedidas = [];
  	for (var i = 0; i < nros.length; i++) {
	   notasPedidas.push(dameNotaNro(nota, nros[i]));
	}
	return notasPedidas;
}


// Todo
function reproduciNota(nota) {
  reproducirNota();
}

function dameTriadaFundamentalDeAcorde(nota, tonalidad){
	let triadaFundamental = [dameNotaNro(nota, 1),dameNotaNro(nota, 8)];
	if(tonalidad == 'maj'){
		triadaFundamental.push(dameNotaNro(nota, 5));
	} else {
		triadaFundamental.push(dameNotaNro(nota, 4));
	}
	
	return triadaFundamental;
}

function dameEscalaDeAcorde(nota, tonalidad){	
	if(tonalidad == 'maj'){
		return dameNotasNro(nota, [1,3,5,6,8,10,12]);
	} else {
		// se sobreentiende que es menor
		return dameNotasNro(nota, [1,3,4,6,8,9,11]);
	}
	return triadaFundamental;
}

