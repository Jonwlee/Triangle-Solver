function solverFunction() {
     var x = parseInt(document.getElementById("inputLegOne").value);
     var y = parseInt(document.getElementById("inputLegTwo").value);
   	 document.getElementById("text").value = Math.sqrt(x*x + y*y);
    }

function clickHandler(e) {
	setTimeout(solverFunction, 1000);
	}

function main() {
	}
	
	document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', clickHandler);
	main();
	});