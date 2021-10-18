const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('What is your age? ', (age) => {
	console.log('Your age is: ' + age);
});


reader.question("What would you like to calculate? ", function(input){
	
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === '+'){
		console.log(num1 + num2)
	}
	 else if (mathSymbol === '-'){
		console.log(num1 - num2)
	} else if (mathSymbol === '*'){
		console.log(num1 * num2)
	} else if (mathSymbol === '/'){
		console.log(num1 / num2)
	} else if (mathSymbol === '|'){
		console.log(Math.sqrt(num1))
	}
	

	
//	console.log('mathSymbol', mathSymbol)
//	console.log('num1', num1)
//	console.log('num2', num2)

	// This line closes the connection to the command line interface.
	reader.close()

});
