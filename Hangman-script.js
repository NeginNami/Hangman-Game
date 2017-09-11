
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
var losses=0;
var sameCharsLeft="";
var isLastNeededChar=0;
var charCounter=0;
var charCounter2=0;

document.onkeyup=function(event) {

	var userGuess=event.key;
	
	
	var computer_choice_lower=computer_choice.toLowerCase();

	console.log("Computer Choice second: "+computer_choice);

	//Checking if a current pressed button had already been pressed before
	var checkRepetition=0;
	for (var i = 0; i < current_word.length; i++) {
	 	if (userGuess===current_word[i] || guess_string.search(userGuess)!==-1) {
	 		checkRepetition=1;
	 	}
	 }

	//Counting if the current guessed world just need one charactor to be completed, So if the current char is between the computer choice letters, 
	//then we go to the win condition
	isLastNeededChar=0;
	charCounter=0;
	


	for (var i = 0; i < current_word.length; i++) {
		if (current_word[i]!=="-") 
			charCounter++;
	}
	console.log("Char counter is: "+charCounter);
	if (charCounter==current_word.length-1) 
		isLastNeededChar=1;

	///Checking if the last remaining chars are the same

	
	if (repString(computer_choice_array,userGuess)==2 && charCounter==computer_choice_array.length-2) {
		isLastNeededChar=1;
	}


	/////////////Main Part of the code strats here///////////////////////////////////////////////////////////////
	

	if (checkRepetition==0) {
		if (chances>1) {
			 
			if (computer_choice_lower.search(userGuess)!==-1) {
				if (isLastNeededChar==1) {
					wins++;
					chances=12;
					random_number= Math.floor(Math.random() *9);
					computer_choice=shows[random_number];
					computer_choice_array=new Array(shows[random_number].length);
					for (var i = 0; i < computer_choice_array.length; i++) 
						computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
					document.querySelector("#wins").innerHTML=wins;
					guess_string="";
					current_word_string="";
					document.querySelector("#guesses_so_far").innerHTML=guess_string;
					document.querySelector("#guesses_left").innerHTML="12";
					document.querySelector("#current_word").innerHTML=current_word_string;
					console.log("first computer choice: "+computer_choice);
					current_word=new Array(shows[random_number].length);
					for (var i = 0; i < current_word.length; i++)
							current_word[i]="-";
					for (var i = 0; i <current_word.length; i++)
						current_word_string+=" "+current_word[i]+" ";
					document.querySelector("#current_word").innerHTML=current_word_string;
					charCounter2=0;

				}


				else{
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
			}
			else{
				current_word_string="";
				
				for (var i = 0; i <current_word.length; i++) 
					current_word_string+=" "+current_word[i]+" ";

				document.querySelector("#current_word").innerHTML=current_word_string;
				
				chances--;
				guess_string+=" "+userGuess+" ";
				document.querySelector("#guesses_so_far").innerHTML=guess_string;
				document.querySelector("#guesses_left").innerHTML=chances;
				console.log(" chances left: "+chances);
				
			}
		}
		
		else if (chances==1) {
			if (computer_choice_lower.search(userGuess)!==-1) {
					if (isLastNeededChar==1) {
					wins++;
					chances=12;
					random_number= Math.floor(Math.random() *9);
					computer_choice=shows[random_number];
					computer_choice_array=new Array(shows[random_number].length);
					for (var i = 0; i < computer_choice_array.length; i++) 
						computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
					document.querySelector("#wins").innerHTML=wins;
					guess_string="";
					current_word_string="";
					document.querySelector("#guesses_so_far").innerHTML=guess_string;
					document.querySelector("#guesses_left").innerHTML="12";
					document.querySelector("#current_word").innerHTML=current_word_string;
					console.log("first computer choice: "+computer_choice);
					current_word=new Array(shows[random_number].length);
					for (var i = 0; i < current_word.length; i++)
							current_word[i]="-";
					for (var i = 0; i <current_word.length; i++)
						current_word_string+=" "+current_word[i]+" ";
					document.querySelector("#current_word").innerHTML=current_word_string;
					

					}

					else{
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
			
			}
			else{
				losses++;
				chances=12;
				random_number= Math.floor(Math.random() *9);
				computer_choice=shows[random_number];
				computer_choice_array=new Array(shows[random_number].length);
				for (var i = 0; i < computer_choice_array.length; i++) 
					computer_choice_array[i]=computer_choice.charAt(i).toLowerCase();
				document.querySelector("#losses").innerHTML=losses;
				guess_string="";
				current_word_string="";
				document.querySelector("#guesses_so_far").innerHTML=guess_string;
				document.querySelector("#guesses_left").innerHTML="";
				document.querySelector("#current_word").innerHTML=current_word_string;
				console.log("first computer choice: "+computer_choice);
				current_word=new Array(shows[random_number].length);
				for (var i = 0; i < current_word.length; i++)
						current_word[i]="-";
				for (var i = 0; i <current_word.length; i++)
					current_word_string+=" "+current_word[i]+" ";
				document.querySelector("#current_word").innerHTML=current_word_string;
				



			}

		}

	}
	
	else{
		alert("U have already guessed this letter");
	}

	
 
}
//////function that returns the number of the occurance of a certain substring in a string
function repString(str,substr) {
	var myString=str;
	var mySubstring=substr;
	var count=0;
	var pos = myString.indexOf(mySubstring);
	while(pos > -1){
	    ++count;
	    pos = myString.indexOf(mySubstring, ++pos);
	}
	return count; 

}
