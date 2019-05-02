export class JuegoPiedraPapelTijera {
	public decisionOrdenador: string;
	public decisionUsuario: string;
	public resultado: boolean;

	public tomarDecisionOrdenador(){
		var numero =  Math.floor((Math.random()*3)+1); 
		var respuesta;
		switch(numero)
		{
			case 1:
				respuesta = "Piedra";
			break;	
			case 2:
				respuesta = "Papel";
			break;
			case 3:
				respuesta = "Tijera";
			break;
		}
	    this.decisionOrdenador = respuesta;
	}


	public logicaJuego(decisionUsuario, decisionOrdenador){
		var respuesta = "";
	    if (decisionUsuario == decisionOrdenador) {
	        respuesta = "Empate";
	    } else {
	        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
	            respuesta = "Gana el ordenador.";
	        } 
	        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
	            respuesta = "Gana el usuario";
	        } 
	        if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") { 
	            respuesta = "Gana el ordenador.";
	         }
	         if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra"){
	            respuesta = "Gana el usuario";
	        }
	         if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
	            respuesta = "Gana el ordenador.";
	            }
	         if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
	            respuesta = "Gana el usuario";
	        }
	    }
	    return respuesta;
	}


}
