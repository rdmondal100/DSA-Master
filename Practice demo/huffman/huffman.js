// // Step 1: Define a Node class
// class Node {
//   constructor(char, freq, left = null, right = null) {
//     this.char = char;     // Character (null for internal nodes)
//     this.freq = freq;     // Frequency
//     this.left = left;     // Left child
//     this.right = right;   // Right child
//   }
// }

// // Step 2: Generate frequency map
// const text = "Riday Mondal";   // Input string
// const freqMap = {};
// for (let ch of text) {
//   freqMap[ch] = (freqMap[ch] || 0) + 1;
// }

// console.log("freqMap")
// console.log(freqMap)

// // Step 3: Build min-heap (simulated with sorted array)
// let heap = Object.entries(freqMap).map(([char, freq]) => new Node(char, freq));
// heap.sort((a, b) => a.freq - b.freq);  // Sort by frequency

// // Step 4: Build Huffman Tree
// while (heap.length > 1) {
//   const left = heap.shift();       // Lowest frequency
//   const right = heap.shift();      // Next lowest
//   const newNode = new Node(null, left.freq + right.freq, left, right);
//   heap.push(newNode);              // Push combined node
//   heap.sort((a, b) => a.freq - b.freq); // Re-sort
// }
// const root = heap[0];              // Final root node

// // Step 5: Generate Huffman Codes
// function generateCodes(node, prefix = "", codeMap = {}) {
//   if (!node) return;

//   if (node.char !== null) {
//     codeMap[node.char] = prefix;   // Leaf node => store code
//   }

//   generateCodes(node.left, prefix + "0", codeMap);
//   generateCodes(node.right, prefix + "1", codeMap);

//   return codeMap;
// }

// const codes = generateCodes(root);    // Generate codes

 

// function encode(text, codeMap) {
//   let encodedStr = "";
//   for (let ch of text) {
//     encodedStr += codeMap[ch];
//   }
//   return encodedStr;
// }
// const encoded = encode(text,codes)

 
// function decode(encodedStr, root) {
//   let result = "";
//   let current = root;

//   for (let bit of encodedStr) {
//     current = bit === "0" ? current.left : current.right;

//     if (current.char !== null) {
//       result += current.char;   // Reached a character node
//       current = root;           // Restart from root
//     }
//   }

//   return result;
// }

// const decoded = decode(encoded, root);



// // Step 8: Print everything
// console.log("Huffman Codes:");
// for (let ch in codes) {
//   console.log(`${ch}: ${codes[ch]}`);
// }

// console.log("\nOriginal String:", text);
// console.log("Encoded Binary:  ", encoded);
// console.log("Decoded Back:    ", decoded);



class Node {
    constructor(char, freq, left, right){
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right
    }
}

const text = "Riday mondal "
const freqMap = {}

for(let ch of text){
    freqMap[ch] = (freqMap[ch] || 0 ) + 1;

}

console.log(freqMap)

let heap = Object.entries(freqMap).map(([char,freq])=>new Node(char,freq,))
heap.sort((a,b)=>a.freq - b.freq)


while(heap.length > 1){

    const left = heap.shift()
    const right = heap.shift()

    const newNode = new Node(null,left.freq + right.freq,left,right)
    heap.push(newNode)

    heap.sort((a,b)=>a.freq - b.freq)

}

const root = heap[0]

 

function generateCodes(node, prefix="",codeMap = {}){
    if(!node) return 

    if(node.char !== null){
        codeMap[node.char] = prefix
    }

    generateCodes(node.left, prefix + "0", codeMap)
    generateCodes(node.right, prefix + "1" , codeMap)


    return codeMap
}

const codes = generateCodes(root)


function encode(text, codeMap){
    let encodedStr = ""

    for(let ch of text){
        encodedStr += codeMap[ch]
    }
    return encodedStr
}

const encoded = encode(text, codes)

function decode (encodedStr, root){
    let result = "";
    let current = root;
  
    for(let bit of encodedStr){
        console.log(bit)
        current = bit === '0'? current.left : current.right;
 

        if(current.char !== null){
            result +=current.char ; 
            current = root
        }
    }

    return result
}


 const decoded = decode(encoded, root); 

 
 // Step 8: Print everything
console.log("Huffman Codes:");
for (let ch in codes) {
  console.log(`${ch}: ${codes[ch]}`);
}

console.log("\nOriginal String:", text);
console.log("Encoded Binary:  ", encoded);
console.log("Decoded Back:    ", decoded);
 