let printDigits = (num) => {
let backwardsNum = 0;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  backwardsNum = backwardsNum * 10 + lastDigit;
  //console.log(backwardsNum);
  console.log(lastDigit);
  num = Math.floor(num/10);
}

console.log("Reverse number : "+backwardsNum);
}

printDigits(3498729);