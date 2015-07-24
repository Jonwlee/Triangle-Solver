function solverFunction() {


  var a = parseInt(document.getElementById("inputLegA").value);
  var b = parseInt(document.getElementById("inputLegB").value);
  var c = parseInt(document.getElementById("inputLegC").value);
  var A = parseInt(document.getElementById("inputAngleA").value);
  var B = parseInt(document.getElementById("inputAngleB").value);
  var C = parseInt(document.getElementById("inputAngleC").value);

  var sides  = (!isNaN(a)) + (!isNaN(b)) + (!isNaN(c));  // Boolean to integer conversion
  var angles = (!isNaN(A)) + (!isNaN(B)) + (!isNaN(C));

  if ( sides == 2 && angles == 0 && isNaN(c))  //pythagorean shit
    document.getElementById("inputLegC").value = Math.sqrt(a * a + b * b) + "";
  


  else if  ( sides == 2 && angles == 0 && isNaN(a) && isNaN(b))

    document.getElementById("inputLegA").value = Math.sqrt(c * c - b * b) + "";
  
  
  else if  ( sides == 2 && angles == 0 && !isNaN(a) && isNaN(b))
    document.getElementById("inputLegB").value = Math.sqrt(c * c - a * a) + "";


  else if ( sides == 3 )    
    


   document.getElementById("inputAngleA").value = lawCos(a,b,c,A) ;
   document.getElementById("inputAngleB").value = lawCos(b,a,c,B) ;
   document.getElementById("inputAngleC").value = lawCos(c,a,b,C) ;

   else if (sides == 2 )

    




  }

function lawCos(x,y,z,X) {

  X = Math.acos(((y * y) + (z * z) - (x * x)) / (2 * y *z ));
  return X;

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