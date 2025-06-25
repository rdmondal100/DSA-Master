


const margeSort = (arr) => {

  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid)


  return marge(margeSort(left), margeSort(right))

}

const marge = (left, right) => {

  let r = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      r.push(left[i])
      i++
    } else {
      r.push(right[j])
      j++
    }
  }

  return r.concat(left.slice(i)).concat(right.slice(j))

}


let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", margeSort(array));