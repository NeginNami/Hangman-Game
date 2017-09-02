
var shows=["Caillou","Arthur","SpongeBob","Smurfs","Rugrats","Rainbow","WorldGirl","Pingu","Cyberchase","Flintstones"];

var random_number= Math.floor(Math.random() *9);
var computer_choice=shows[random_number];
var computer_choice_array=new Array(shows[random_number].length);
for (var i = 0; i < computer_choice_array.length; i++) {
	computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
}
var chances=12;
var guess_string="";
var current_word=new Array(shows[random_number].length);

for (var i = 0; i < current_word.length; i++) {
	current_word[i]="-";
}
var current_word_string="";
for (var i = 0; i <current_word.length; i++) {
	current_word_string+=" "+current_word[i]+" ";
	
}
var win_flag=0;
var loss_flag=0;
var wins=0;

document.onkeyup=function(event) {

	var userGuess=event.key;
	
	
	var computer_choice_lower=computer_choice.toLowerCase();

	console.log("Computer Choice: "+computer_choice);
/*	if (loss_flag==1) {
		random_number= Math.floor(Math.random() *9);
		computer_choice=shows[random_number];
		computer_choice_array=new Array(shows[random_number].length);
		for (var i = 0; i < computer_choice_array.length; i++) {
			computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
		}
		chances=12;
		guess_string="";
		current_word=new Array(shows[random_number].length);

		for (var i = 0; i < current_word.length; i++) {
			current_word[i]="-";
		}
		var current_word_string="";
		for (var i = 0; i <current_word.length; i++) {
			current_word_string+=" "+current_word[i]+" ";
			
		}
		loss_flag=0;
	} */
	

	if (chances>0) {
		if (computer_choice_lower.search(userGuess)!==-1) {
			current_word_string="";
			for (var i = 0; i <computer_choice_array.length ; i++) {
				if (computer_choice_array[i]===userGuess) {
					current_word[i]=userGuess;
				}
			}
			for (var i = 0; i <current_word.length; i++) 
				current_word_string+=" "+current_word[i]+" ";

			document.querySelector("#current_word").innerHTML=current_word_string;
		}
		else{

			chances--;
			guess_string+=" "+userGuess+" ";
			document.querySelector("#guesses_so_far").innerHTML=guess_string;
			document.querySelector("#guesses_left").innerHTML=chances;
		}
	}
	else{
		random_number= Math.floor(Math.random() *9);
		computer_choice=shows[random_number];
		computer_choice_array=new Array(shows[random_number].length);
		for (var i = 0; i < computer_choice_array.length; i++) {
			computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
		}
		chances=12;
		guess_string="";
		current_word=new Array(shows[random_number].length);

		for (var i = 0; i < current_word.length; i++) {
			current_word[i]="-";
		}
		var current_word_string="";
		for (var i = 0; i <current_word.length; i++) {
			current_word_string+=" "+current_word[i]+" ";
			
		}
		document.querySelector("#current_word").innerHTML=current_word_string;
	} 
	
	/*	if (computer_choice_lower.search(userGuess)!==-1 && chances>0) {
			current_word_string="";
			for (var i = 0; i <computer_choice_array.length ; i++) {
				if (computer_choice_array[i]===userGuess) {
					current_word[i]=userGuess;
				}
			}
			for (var i = 0; i <current_word.length; i++) 
				current_word_string+=" "+current_word[i]+" ";

			document.querySelector("#current_word").innerHTML=current_word_string;
			


		}
		else{
			if (chances>0) {
			chances--;
			guess_string+=" "+userGuess+" ";
			document.querySelector("#guesses_so_far").innerHTML=guess_string;
			document.querySelector("#guesses_left").innerHTML=chances;
			}
			else{
				loss_flag=1;

			}


		} */
	





}