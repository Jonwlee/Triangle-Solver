function solverFunction() {


    var a = parseInt(document.getElementById("inputLegA").value);
    var b = parseInt(document.getElementById("inputLegB").value);
    var c = parseInt(document.getElementById("inputLegC").value);
    var A = parseInt(document.getElementById("inputAngleA").value);
    var B = parseInt(document.getElementById("inputAngleB").value);
    var C = parseInt(document.getElementById("inputAngleC").value);

  var sides  = (typeof a != 'undefined') + (typeof b != 'undefined') + (typeof c != 'undefined');  // Boolean to integer conversion
  var angles = (typeof A != 'undefined') + (typeof B != 'undefined') + (typeof C != 'undefined');

    if ( sides == 2 && angles == 0 && typeof c == 'undefined')  //pythagorean shit
      document.getElementById("inputLegC").value = Math.sqrt(a * a + b * b) + "";
    

    else if  ( sides == 2 && angles == 0 && typeof a == 'undefined' && typeof b !== 'undefined')
      document.getElementById("inputLegA").value = Math.sqrt(c * c - b * b) + "";
    
    

    else if  ( sides == 2 && angles == 0 && typeof a !== 'undefined' && typeof b == 'undefined')
      document.getElementById("inputLegB").value = Math.sqrt(c * c - a * a) + "";
    
    
  }

  document.addEventListener('DOMContentLoaded', //this is one big parameter
    function handlers() {
    document.getElementById('clearInputs').addEventListener('click', clearInputs);
    document.getElementById('calculate').addEventListener('click', solverFunction);
});

function clearInputs() {
    // clears input boxes to empty string
    document.getElementById("inputLegA").value = "";
    document.getElementById("inputLegB").value = "";
    document.getElementById("inputLegC").value = "";
    document.getElementById("inputAngleA").value = "";
    document.getElementById("inputAngleB").value = "";
    document.getElementById("inputAngleC").value = "";
}





//these are all long one argument for .addEventlinster
//c^2 = a^2 + b^2 - 2ab*cosC