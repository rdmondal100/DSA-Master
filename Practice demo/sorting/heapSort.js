
// Heap 

//  left child: i * 2
// right  child: i *2 + 1 
// parent : i / 2

 
// class MinHeap {
//   constructor() {
//     this.heap = [null]; // Start with null to make index 1-based
//   }

//   insert(value) {
//     this.heap.push(value);
//     let index = this.heap.length - 1;

//     // Bubble up
//     while (index > 1 && this.heap[Math.floor(index / 2)] > this.heap[index]) {
//       [this.heap[Math.floor(index / 2)], this.heap[index]] =
//         [this.heap[index], this.heap[Math.floor(index / 2)]];
//       index = Math.floor(index / 2);
//     }
//   }

//   extractMin() {
//     if (this.heap.length <= 1) return null;
//     if (this.heap.length === 2) return this.heap.pop();

//     const min = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     this.heapify(1);

//     return min;
//   }

//   heapify(index) {
//     let smallest = index;
//     const left = 2 * index;
//     const right = 2 * index + 1;
//     const length = this.heap.length;

//     if (left < length && this.heap[left] < this.heap[smallest]) {
//       smallest = left;
//     }

//     if (right < length && this.heap[right] < this.heap[smallest]) {
//       smallest = right;
//     }

//     if (smallest !== index) {
//       [this.heap[smallest], this.heap[index]] =
//         [this.heap[index], this.heap[smallest]];
//       this.heapify(smallest);
//     }
//   }

//   getHeap() {
//     return this.heap.slice(1); // skip the dummy null
//   }

//   size() {
//     return this.heap.length - 1;
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }
// }


// function heapSortUsingMinHeap(arr) {
//   const minHeap = new MinHeap();

//   // Insert all elements into the heap
//   for (let num of arr) {
//     minHeap.insert(num);
//   }

//   // Extract min elements one by one
//   const sorted = [];
//   while (!minHeap.isEmpty()) {
//     sorted.push(minHeap.extractMin());
//   }

//   return sorted;
// }



function heapSortAsc ( arr){
    const n = arr.length

    for(let i = Math.floor(n/2)-1; i >= 0;i--){
        maxHeapify(arr, n, i)
    }


    for(let i = n - 1; i> 0; i--){
        [arr[0], arr[i] ]= [arr[i] , arr[0]]
        maxHeapify(arr, i , 0)
    }

    return arr ; 
}

function maxHeapify (arr, size, i ) {
    let largest = i 
    const left = 2 * i + 1
    const right = 2 * i + 2

    if(left < size && arr[left] > arr[largest]){
        largest = left
    }

    if(right < size && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i ){
        [arr[i], arr[largest]] =[arr[largest] , arr[i]]; 
        maxHeapify(arr, size, largest)
    }

}


console.log(heapSortAsc([33,21,1,33,4,2]))