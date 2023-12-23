function screenClear() {
 document.getElementById("result").value = "";
}


function display(value) {
 document.getElementById("result").value += value;
}
function calculateResult() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}
function calculatePower(){
    var r =document.getElementById("result").value*document.getElementById("result").value;
    var pow = eval(r);
    document.getElementById("result").value = r;
}
function squareRoot(){
    var a = Math.sqrt(document.getElementById("result").value);
    var sqr = eval(a);
    document.getElementById("result").value = sqr; 
}