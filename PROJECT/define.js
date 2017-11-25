
   	var x,x1,x2,x3,x4,x5;
   var count,y;
document.getElementById("reset").addEventListener("click", function(){
	var c=Math.floor(Math.random()*6+1);
		document.getElementById("blah").innerHTML="Play!"
	document.getElementById("work").src= randomflag();
	x=count;
	if(c==1){
		y=count;
		x=y;
}
document.getElementById("work").addEventListener("click", function(){
 if(y==x)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
   document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
 	});

	document.getElementById("work1").src= randomflag()
	while(1){
  	 if(count==x){
  	 	document.getElementById("work1").src= randomflag();
  	 	x1=count;
  	}
  	else break;
	}
	if(c==2){
		y=count;
		x1=y;
} 
document.getElementById("work1").addEventListener("click", function(){
 if(y==x1)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
 	document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
  });
   
	document.getElementById("work2").src=randomflag()
	while(1){
  	 if(count==x||count==x1){
  	 	document.getElementById("work2").src= randomflag();
  	 	x2=count;
  	}
  	else break;
  }
	if(c==3){
		y=count;
		x2=y;
}  
 document.getElementById("work2").addEventListener("click", function(){
 if(y==x2)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
 	document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
  });

	document.getElementById("work3").src= randomflag()
	while(1){
  	 if(count==x||count==x1||count==x2){
  	 	document.getElementById("work3").src= randomflag();
  	 	x3=count;
  	}
  	else break;
  }
	if(c==4){
		y=count;
		x3=y;
} 
 
 document.getElementById("work3").addEventListener("click", function(){
 if(y==x3)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
 	document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
  });
	
	document.getElementById("work4").src= randomflag()
	while(1){
  	 if(count==x||count==x1||count==x2||count==x3){
  	 	document.getElementById("work4").src= randomflag();
  	 	x4=count;
  	}
  	else break;
  }
	if(c==5){
		y=count;
		x4=y;
} 
 
 document.getElementById("work4").addEventListener("click", function(){
 if(y==x4)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
 	document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
  });

	
	document.getElementById("work5").src=randomflag();
		while(1){
  	 if(count==x3||count==x2||count==x1||count==x||count==x4){
  	 	document.getElementById("work5").src= randomflag();
  	 	x5=count;
  	}
  	else break;
  }
	if(c==6){
		y=count
		x5=y;
} 

 document.getElementById("work5").addEventListener("click", function(){
 if(y==x5)
 	document.getElementById("blah").innerHTML="<p class=\"text-success\">CORRECT!</p>"
 else
 	document.getElementById("blah").innerHTML="<p class=\"text-danger\">INCORRECT!</p>"
   });
 function randomflag()
{
 count=Math.floor(Math.random()*189);
  return fnames[count];
}
});


 
document.getElementById("reset").addEventListener("click", function(){
 document.getElementById("bleh").innerHTML = cnames[y];
  });



