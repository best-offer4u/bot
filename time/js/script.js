function generate(){
	var firstname = [





"Marquis",
 
"Khalil",





];
	
	var rand_first = Math.floor(Math.random()*firstname.length); 
	
	document.getElementById('result').innerHTML = "<h1>My name is:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+"</h2></div>";
	
}