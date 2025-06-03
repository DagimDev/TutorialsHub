const MergeSort = (arr) => {
  if (arr.length < 2){
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid) 
  return merge(MergeSort(leftArr), MergeSort(rightArr))
};
const merge = (leftArr, rightArr) => {
  const sortedArr = []
  while(leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]){
          sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr ,...leftArr, ...rightArr]
}

const arrToSort = [-6, 20, 8, -2, 4];
const isSorted = MergeSort(arrToSort);
console.log(isSorted); 

// 1. MergeSort Function Overview
// The MergeSort function:

// Divides the array into halves recursively until single elements remain

// Merges the sorted halves back together using the merge helper function

// 2. Step-by-Step Execution
// Initial Call: MergeSort([-6, 20, 8, -2, 4])
// Base Case Check: 5 < 2? No → Continue

// Find Middle Index:

  
// const mid = Math.floor(5 / 2) // 2
// Split Array:

  
// const leftArr = [-6, 20]  // arr.slice(0, 2)
// const rightArr = [8, -2, 4] // arr.slice(2)
// Recursive Calls:

  
// return merge(MergeSort([-6, 20]), MergeSort([8, -2, 4]))
// First Recursive Call: MergeSort([-6, 20])
// Base Case Check: 2 < 2? No → Continue

// Split:

  
// leftArr = [-6]
// rightArr = [20]
// Recursive Calls:

  
// return merge(MergeSort([-6]), MergeSort([20]))
// Both MergeSort([-6]) and MergeSort([20]) hit the base case and return their single-element arrays

// Merge Operation:

  
// merge([-6], [20])
// Compare -6 and 20 → -6 is smaller

// sortedArr = [-6]

// Remaining rightArr = [20]

// Final merge: [-6, 20]

// Second Recursive Call: MergeSort([8, -2, 4])
// Base Case Check: 3 < 2? No → Continue

// Split:

  
// leftArr = [8]
// rightArr = [-2, 4]
// Recursive Calls:

  
// return merge(MergeSort([8]), MergeSort([-2, 4]))
// MergeSort([8]) returns [8] (base case)

// MergeSort([-2, 4]) needs further processing

// Processing MergeSort([-2, 4])
// Base Case Check: 2 < 2? No → Continue

// Split:

  
// leftArr = [-2]
// rightArr = [4]
// Merge Operation:

  
// merge([-2], [4]) → [-2, 4]
// Now Merge Back [8] and [-2, 4]
  
// merge([8], [-2, 4])
// Compare:

// 8 vs -2 → -2 is smaller → sortedArr = [-2]

// 8 vs 4 → 4 is smaller → sortedArr = [-2, 4]

// Remaining leftArr = [8]

// Final Merge:

  
// [-2, 4, 8]
// Final Merge: [-6, 20] and [-2, 4, 8]
  
// merge([-6, 20], [-2, 4, 8])
// Step-by-Step Comparison:

// Comparison	Action	sortedArr	Remaining Arrays
// -6 vs -2	-6 < -2	[-6]	[20], [-2,4,8]
// 20 vs -2	-2 < 20	[-6,-2]	[20], [4,8]
// 20 vs 4	4 < 20	[-6,-2,4]	[20], [8]
// 20 vs 8	8 < 20	[-6,-2,4,8]	[20], []
// Append Remaining Elements:

  
// [...[-6,-2,4,8], ...[20], ...[]] → [-6,-2,4,8,20]
// 3. Final Sorted Array
  
// console.log(isSorted); // [-6, -2, 4, 8, 20]
// Key Characteristics of This Implementation
// Divide and Conquer Strategy

// Continuously splits arrays until they contain single elements

// Merges them back in sorted order

// Stable Sort

// Maintains relative order of equal elements (important for object sorting)

// Time Complexity

// Best/Average/Worst Case: O(n log n)

// Space Complexity

// O(n) (requires temporary arrays during merging)

// The merge() Function Does the Heavy Lifting

// Efficiently combines two pre-sorted arrays

// Uses array destructuring (...) for clean concatenation