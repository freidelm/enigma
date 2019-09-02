$(document).ready(function(){
  $("#btnEncriptar").click(function(){
  	var mensajeUnoEncriptar = '';
  	var mensajeDosEncriptar = '';
  	var mensajeTresEncriptar = '';
  	var longitudMensajeUno = '';
  	var longitudMensajeDos = '';
  	var longitudMensajeTres = '';
  	var letras = new Array('A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'X', 'Y', 'Z');
  	var azar = '';
  	var inicio = '';
  	var final = '';
  	var ruta = '';
  	var variable = '';
  	var filas = 0;
  	var k=0;
  	var columnas = 0;
  	var orden = '';
  	var mensajeNuevo = new Array();
  	var mensajeNuevo2 = new Array();
  	var mensajeNuevo3 = new Array();
  	
  	mensajeUnoEncriptar = $("#mensaje1Encriptar").val().replace(/ /g,"").toUpperCase();
  	longitudMensajeUno = mensajeUnoEncriptar.length;

  	for (var i = 0; i < longitudMensajeUno; i++) {
  		if (mensajeUnoEncriptar[i] == "C") {
  			variable = i+1;
  			columnas = mensajeUnoEncriptar[i-1];
  		}  		
  	}

  	ruta = mensajeUnoEncriptar.slice(variable,longitudMensajeUno);
  	filas = longitudMensajeUno/columnas;
  	filas = Math.round(filas);
  	
  	for (var j = 0; j < columnas; j++) {
  		k=j;
  		while(k<longitudMensajeUno){
  			mensajeNuevo=mensajeNuevo + mensajeUnoEncriptar[k];
  			k = k + parseInt(columnas);
  			k = parseInt(k);
  		}
  	}

  	mensajeDosEncriptar = $("#mensaje2Encriptar").val().replace(/ /g,"").toUpperCase();
  	for (var l = 0; l < 5; l++) {
  		azar = letras[Math.round(Math.random()*letras.length)].toUpperCase();
  		inicio = inicio + azar; 
  	}

  	for (l = 0; l < 7; l++) {
  		azar = letras[Math.round(Math.random()*letras.length)].toUpperCase();
  		final = final + azar; 
  	}
  	mensajeDosEncriptar = inicio + mensajeDosEncriptar + final;
  	longitudMensajeDos = mensajeDosEncriptar.length;

	mensajeTresEncriptar = $("#mensaje3Encriptar").val().replace(/ /g,"").toUpperCase();
  	
  	for ( j = 0; j < columnas; j++) {
  		k=ruta[j]-1;
  		while(k<longitudMensajeDos){
  			mensajeNuevo2=mensajeNuevo2 + mensajeDosEncriptar[k];
  			k = k + parseInt(columnas);
  			k = parseInt(k);
  		}
  	}

  	longitudMensajeTres = mensajeTresEncriptar.length;

  	for (j = 0; j < columnas; j++) {
  		k=j;
  		while(k<longitudMensajeTres){
  			mensajeNuevo3=mensajeNuevo3 + mensajeTresEncriptar[k];
  			k = k + parseInt(columnas);
  			k = parseInt(k);
  		}
  	}

  	$("#mensajeYaEncriptado1").text('Mensaje 1: ' + mensajeNuevo);
  	$("#mensajeYaEncriptado2").text('Mensaje 2: ' + mensajeNuevo2);
  	$("#mensajeYaEncriptado3").text('Mensaje 3: ' + mensajeNuevo3);

    $("#mensaje1Encriptar").attr('disabled','disabled');
    $("#mensaje2Encriptar").attr('disabled','disabled');
    $("#mensaje3Encriptar").attr('disabled','disabled');    
  });

  $("#resetEncriptar").click(function(){
    $("#mensaje1Encriptar").removeAttr('disabled'); 
    $("#mensaje2Encriptar").removeAttr('disabled');
    $("#mensaje3Encriptar").removeAttr('disabled'); 
    $("#mensaje1Encriptar").val('');
    $("#mensaje2Encriptar").val('');
    $("#mensaje3Encriptar").val('');
  });




  $("#btnDesencriptar").click(function(){
    $("#mensaje1Desencriptar").attr('disabled','disabled');
    $("#mensaje2Desencriptar").attr('disabled','disabled');
    $("#mensaje3Desencriptar").attr('disabled','disabled');    
  });

  $("#resetDesencriptar").click(function(){
    $("#mensaje1Desencriptar").removeAttr('disabled'); 
    $("#mensaje2Desencriptar").removeAttr('disabled');
    $("#mensaje3Desencriptar").removeAttr('disabled'); 
    $("#mensaje1Desencriptar").val('');
    $("#mensaje2Desencriptar").val('');
    $("#mensaje3Desencriptar").val('');
  });



});

