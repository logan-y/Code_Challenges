// const best = (arr) => {
//     let sellPrice = 0;
//     // let buyPrice = Math.min(...arr);
//     arr.filter(price => {
//         if(price > sellPrice){
//             return sellPrice = price
//         }
//     })

//    return sellPrice;
// }

// console.log(best([2, 4, 7, 8, 3, 9, 3, 5, 1]));


const best = (arr) => {
    let sellPrice = 0
    let sellPriceIndex = 0

    arr.forEach((i, el) => {
        if (i > sellPrice){
            sellPrice = i
            sellPriceIndex = el
        }
    })
    let buyPrice = sellPrice

    for (let i = 0; i < sellPriceIndex; i++){
        if (arr[i] < buyPrice){
            buyPrice = arr[i];
        }
    }
    if(sellPrice <= buyPrice){
        return 0 
    }
    return `Buy at ${buyPrice}, sell at ${sellPrice}. Your profit will be ${sellPrice - buyPrice}`
}
    


 console.log(best([600, 4, 7, 8, 5, 10, 3, 50, 1]));

