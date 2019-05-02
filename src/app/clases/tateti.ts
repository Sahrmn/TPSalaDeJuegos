export class Tateti {
	tablero;
	turno: number;
    criterioDeGanador = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
    ];

	//nuevo tablero
	getInitialBoard() {
		return [
		[null,null,null],
		[null,null,null],
		[null,null,null]];
	}

    /*verificarSiHayGanador() {
    	let respuesta: boolean = false;
        for(let i of this.criterioDeGanador){
            let a = this.tablero[i[0]];
            let b = this.tablero[i[1]];
            let c = this.tablero[i[2]];
            if(a !== " " && a === b && a === c){
                respuesta = true;
            }
        }
        return respuesta;
    }

    setTurno(){
        if(this.turno == 0){
            this.turno = 1
        }else{
            this.turno = 0
    	}
	}*/

	// Genera el tablero en la página
	public generateUIBoard() {
		let html = "";
		for (var i = 0; i < 9; i++) {
			html += ('<li><div class="cell"></div></li>');
		}
		return html;
	}

	// Actualiza la página para reflejar el estado actual del
	// tablero
	/*updateUI(board) {
		for (var row = 0; row < 3; row++) {
			for (var col = 0; col < 3; col++) {
				var index = ((row * 3) + col) + 1;
				if (board[row][col] != null) {
				$('li:nth-child('+index+') .cell')
				.addClass('marked')
				.addClass('player-' + board[row][col]);
				}
			}
		}
	}*/

	

}
