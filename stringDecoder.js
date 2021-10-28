const decoder = (code) => {
    goodLetterArr = [];
        for(let i = 0; i < code.length-1; i++){

            if(!isNaN(code.charAt(i))){
                let j = 1;
                j += i;
                j += Number(code[i]);
                // console.log(code[j]);
                goodLetterArr.push(code[j]) 
                //console.log(goodLetterArr);
            }
            
        }
        goodLetterArr.push(code[code.length-1]);
        goodLetterArr.join();
        let newStr = String(goodLetterArr);
        newStr.split(',');
       
        return newStr;

}
const heyo = decoder('0hwo0ei2eiyieeo');
console.log(heyo);
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfes' => 'yes