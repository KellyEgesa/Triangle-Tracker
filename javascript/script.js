//Business Logic
var a = prompt("Input side a:");
var b = prompt("Input side b:");
var c = prompt("Input side c:");
if(a+b<=c || b+a<=c || c+b<=a){
	alert("Not a Triangle")
}
else{
	if (a == c && a==b && b==c){
		alert("Equilateral Triangle");
	}
	else if(a == c || a==b || b==c){
		alert("Isosceles Triangle");
	}
	else{
		if( a+b>c || b+c>a || c+b>a){
  		alert("Scalene Triangle")
  	}
  	else{
 		 alert("Not a Triangle")
  	}
	}
 }
