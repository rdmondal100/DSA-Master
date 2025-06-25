




// function getDigit(num, place) {
//   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// }

// function getMaxDigits(arr) {
//   let max = 0;
//   for (let num of arr) {
//     max = Math.max(max, num.toString().length);
//   }
//   return max;
// }

// function countingSortByDigit(arr, place) {
//   const count = Array.from({ length: 10 }, () => []); // buckets 0–9

//   for (let num of arr) {
//     const digit = getDigit(num, place);
//     count[digit].push(num);
//   }

//   return count.flat();
// }

// function radixSort(arr) {
//   const maxDigits = getMaxDigits(arr);

//   for (let place = 0; place < maxDigits; place++) {
//     arr = countingSortByDigit(arr, place);
//   }

//   return arr;
// }


const getDigit = (num,place)=>{

    return Math.floor((Math.abs(num)/Math.pow(10,place))%10)
}


const getMaxGigits = (arr)=>{
    let max = 0

    for(let num of arr){
        max = Math.max(max,num.toString().length)

    }
    return max
}

console.log(getMaxGigits([42,22,3,2,0,3]))

const countingSortByDigit = (arr,place)=>{
    const count = Array.from({length: 10},()=>[])
    console.log(count)

    for(let num of arr){
        const digit = getDigit(num,place)
        console.log(digit)
        count[digit].push(num)
    }
    return count.flat()
}

const radixSort = (arr)=>{
    const maxDisit = getMaxGigits(arr)
    for(let place = 0; place< maxDisit; place++){
        arr = countingSortByDigit(arr, place)
    }

    return arr
}

console.log(radixSort([88,12,3,15,0,3],0))
 