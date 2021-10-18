let wiggle = [1, 540, 69, 420, 4];

let min = wiggle[0]
let max = wiggle[1]

for (let i=0; i < wiggle.length; i++){
  if (wiggle[i] > max){
    max = wiggle[i];
  }
  if (wiggle[i] < min){
    min = wiggle[i]
  }
}
console.log(min);
console.log(max);

wiggle.sort(function(a, b){return b - a});
console.log(wiggle);
