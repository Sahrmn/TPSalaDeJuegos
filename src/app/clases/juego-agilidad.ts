export class JuegoAgilidad {
	numeroIngresado: number;
	primerNumero: number;
	segundoNumero: number;
	operador: string;
	respuesta: number;

	nuevaCuenta(){
		this.primerNumero = Math.floor((Math.random() * 10) + 1);
		this.segundoNumero = Math.floor((Math.random() * 10) + 3);
		let randomVal = Math.floor((Math.random() * 4)+ 1);
		console.log("numero random entre 1 y 4= " + randomVal);
		switch(randomVal)
		{
			case 1:
				this.operador = '+';
				this.respuesta = Math.round(this.primerNumero + this.segundoNumero);
				break;
			case 2:
				this.operador = '-';
				this.respuesta = Math.round(this.primerNumero - this.segundoNumero);
				break;
			case 3:
				this.operador = '*';
				this.respuesta = Math.round(this.primerNumero * this.segundoNumero);
				break;
			case 4:
				this.operador = '/';
				this.respuesta = Math.round(this.primerNumero / this.segundoNumero);
				break;
		}

		while(this.segundoNumero > this.primerNumero && this.operador == "/")
		{
			this.primerNumero = Math.floor((Math.random() * 10) + 1);
			this.segundoNumero = Math.floor((Math.random() * 10) + 3);
		}
		
	}


}
