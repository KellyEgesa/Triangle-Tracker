
function page () {
  var Tri = [];
  var a = parseInt(Tri.push(document.getElementById('a').value));
  var b = parseInt(Tri.push(document.getElementById('b').value));
  var c = parseInt(Tri.push(document.getElementById('c').value));
  //Business Logic
  var Triangle = ["Equilateral Triangle","Isosceles Triangle","Scalene Triangle","Not a Triangle"];
  if((a+b)<=c || (b+c)<=a || (c+a)<=b){
    document.getElementById("output").innerHTML=Triangle[3];
  }
  else
    if (a == c && a==b && b==c){
      document.getElementById("output").innerHTML=Triangle[0];
    }
    else if(a == c || a==b || b==c){
      document.getElementById("output").innerHTML=Triangle[1];
    }
    else
      if( a+b>c || b+c>a || c+b>a){
        document.getElementById("output").innerHTML=Triangle[2];
      }
      else{
        document.getElementById("output").innerHTML=Triangle[3];
      }
  }
