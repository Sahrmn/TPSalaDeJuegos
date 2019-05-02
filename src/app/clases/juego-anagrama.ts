export class JuegoAnagrama {
	palabra: string;
	palabra_anagrama: string;

	array_palabras = [
    {"palabra": "animal"},
    {"palabra": "miniatura"},
    {"palabra": "arbol"},
    {"palabra": "residuo"},
    {"palabra": "especialidad"}
	]

	elegirPalabra(){
		let indice = Math.floor(Math.random()*this.array_palabras.length); 
		this.palabra = this.array_palabras[indice].palabra;
	}

	public elegirAnagrama(){
		this.elegirPalabra();
		let array_anagramas = this.FindAllPermutations(this.palabra);
		let indice = Math.floor(Math.random()*array_anagramas.length); 
		return array_anagramas[indice];
	}
	
	FindAllPermutations(str, index= 0, buffer = []) {
	    if (typeof str == "string")
	        str = str.split("");
	    if (typeof index == "undefined")
	        index = 0;
	    if (typeof buffer == "undefined")
	        buffer = [];
	    if (index >= str.length)
	        return buffer;
	    for (var i = index; i < str.length; i++)
	        buffer.push(this.ToggleLetters(str, index, i));
	    return this.FindAllPermutations(str, index + 1, buffer);
	}

	ToggleLetters(str, index1, index2) {
	    if (index1 != index2) {
	        var temp = str[index1];
	        str[index1] = str[index2];
	        str[index2] = temp;
	    }
	    return str.join("");
	}
		

	public comparacion(str1, str2){
		var resultado = false;
		  if(str1 !== null && str2 !== null) {
		    if(str1.length !== str2.length) {
		      resultado = false;
		    }
		    var hashTable = {};
		    for(var i = 0; i < str1.length; i++) {
		      if(hashTable.hasOwnProperty(str1[i])) {
		        hashTable[str1[i]] = hashTable[str1[i]] + 1;
		    } else {
		     hashTable[str1[i]] = 1; 
		    }
		  }
		   
		  for(var i = 0; i < str2.length; i++) {
		    if(hashTable.hasOwnProperty(str2[i])) {
		      hashTable[str2[i]] = hashTable[str2[i]] - 1;
		    } else {
		      resultado = false;
		    }
		  }
		    
		  for(var j in hashTable) {
		    if(hashTable[j] !== 0) {
		      resultado = false;
		    } else {
		       resultado = true;
		    }
		  }
		}
		return resultado;
	}


}
