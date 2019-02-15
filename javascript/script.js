
function page () {

  var a1 = document.getElementById('a').value;
  var b1 = document.getElementById('b').value;
  var c1 = document.getElementById('c').value;
  var a = parseInt(a1);
  var b = parseInt(b1);
  var c = parseInt(c1);

  //Business Logic
  var Triangle = ["Equilateral Triangle","Isosceles Triangle","Scalene Triangle","Not a Triangle"];
  if(a+b<=c || b+c<=a || c+a<=b){
    document.getElementById("output").innerHTML=Triangle[3];
  }
  else if (a == c && a==b && b==c){
      document.getElementById("output").innerHTML=Triangle[0];
    }
  else if(a == c || a==b || b==c){
      document.getElementById("output").innerHTML=Triangle[1];
    }
  else if( a+b>c || b+c>a || c+b>a){
        document.getElementById("output").innerHTML=Triangle[2];
      }
  else{
        document.getElementById("output").innerHTML=Triangle[3];
      }
  }
  function validation(){
    var a2 = document.form["myform"]["a"].value;
  if a2 ==(" "){
    alert("A MUST BE FILLED");
    return false;
  }
