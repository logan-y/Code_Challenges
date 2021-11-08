let arr1 = [2,4,2,4,6,4,6,7,6,4,2];

const findOutlier = (array) => {
    //check first three to determine if majority even/odd
    //run .filter to find even or odd outlier
    majorityCount = 0;
    for(let i = 0; i < 3; i++){
        if(array[i] % 2 == 0){
            majorityCount++;
        }
    }
    if(majorityCount > 1){
        let evenOutlier = array.filter(e => array[e] % 2 !==0)
        // console.log(evenOutlier[0]);
        return evenOutlier[0];
    }
    else{
        let oddOutlier = array.filter(e => array[e] % 2 ==0)
        // console.log(oddOutlier[0]);
        return oddOutlier[0];
    }
}
console.log(findOutlier(arr1))