//1. ex. bubble sort
//built in .sort()
console.log(
	['steel', 'data structure', 'algorithms', 'colt'].sort(
		(str1, str2) => str1.length - str2.length,
	),
);

// 1st solution ==>> compare every ele with the next ele and swap if it less than
const bubbleSort1 = (arr) => {
	let isSorted = false;
	for (let i = 0; i < arr.length - 1; i++) {
		isSorted = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			// console.log(arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				// if (arr[j] < arr[j + 1]) {} //for desc sorted
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap
				isSorted = false;
			}
			console.log(arr, arr[j], arr[j + 1]);
		}

		if (isSorted) break;
	}
	return arr;
};
// console.log(bubbleSort1([2, 1, 3, 4, 6]));
console.log(bubbleSort1([1, 5, 2, 9, 7, 3]));
/************************************************ */
/************************************************ */

// 2.ex => selection sort ==>>
//1st solution ==>> let minValue = first index in loop and swap with lesser value
const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let minVal = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minVal]) {
				// for desc sort ==>> arr[j] > arr[minVal]
				[arr[j], arr[minVal]] = [arr[minVal], arr[j]];
			}
		}
	}
	return arr;
};
console.log(selectionSort([5, 2, 4, 8, 6, 2]));
/************************************************ */
/************************************************ */
// 3. ex. insertion sort ==>> compare ele with ele-1 and if it is smaller  [and not swap them in a time] but store ele in a variable and compare it with the all previous elements then swap when ele-1 is smaller

//1st solution ==>>
const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let tempCurrentVal = arr[i]; //store the ele
		let j = i - 1;
		while (j >= 0 && arr[j] > tempCurrentVal) {
			//arr[j] > tempVal => to compare ele with ele-1 and the previous elements
			arr[j + 1] = arr[j]; // arr[j+1] == arr[i] but arr[j+1] to compare with all elements in his loop not only one element [i] and then j-- until arr[j] > temVal.
			// if arr[j] > tempVal =>> move arr[j] to arr[j+1] until the loop is done
			// console.log(arr);
			j -= 1;
		}
		arr[j + 1] = tempCurrentVal; //j+1 not j because the loop is done when arr[j] > tempVal & j>=0 index
	}
	return arr;
}; // o(n^2) || o(n) // worst case => when it is reversed
console.log(insertionSort([5, 3, 1, 5, 77]));
/************************************************ */
/************************************************ */
//4. ex. merge sort ==>> divide & conquer until []1 index then build new sorted [] again with merged them
/*
	[5,2,1,9,6,4,7,0] ==>> split the half every time (with slice(0, mid) + slice(mid, end))
	[5,2,1,9]  [6,4,7,0] ==>>
	[5,2] [1,9]  [6,4] [7,0] ==>>
	[5] [2]   [1] [9]  [6] [4]  [7] [0] ==>> [base case] then sort every double group
	[2,5]  [1,9]  [4,6]  [0,7] ==>> every [] is sorted
	[1,2,5,9]  [0,4,6,7] ==>> every [] is sorted so will compare arr1[0] with arr2[0] and repeat comparing with every index until put it in the sorted [] ==>> with mergeAlgorithm
	[0,1,2,4,5,6,7,9]
*/
/*  * merge algorithm => to the last step with sorted [] []*/
function mergeLastStep(arr1, arr2) {
	let i = 0; //for arr1[]
	let j = 0; //for arr2[]
	let result = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i += 1;
		} else {
			result.push(arr2[j]);
			j += 1;
		}
	}
	// this loops to push the rest of elements
	while (i < arr1.length) {
		result.push(arr1[i]);
		i += 1;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j += 1;
	}
	return result;
}
console.log(mergeLastStep([0, 1, 50], [2, 14, 99, 100]));

//1st solution ==>>
const mergeSort = (arr) => {
	let mid = Math.floor(arr.length / 2);
	//base case
	if (arr.length <= 1) return arr;
	// console.log('mid', mid);
	// recursion for left half until reach the base case (have ine elements in every [])
	let left = mergeSort(arr.slice(0, mid));
	console.log('left', left);
	//recursion for right half
	let right = mergeSort(arr.slice(mid)); // slice(mid) = slice(mid, end)
	console.log('right', right);
	console.log('[left, right]', left, right);
	console.log(mergeLastStep(left, right));
	return mergeLastStep(left, right);
};
// console.log(mergeSort([5, 7, 2, 0, 100, 4, 2, 3]));
console.log(mergeSort([5, 7, 2, 0, 100, 4]));
/* merge([5,7,2,0,100,4])
	1st recursion{
		left = merge([5,7,2]) ==>> {
			merge([5]) => [5]
		}
		right = merge([7,2]) ==>> {
			left = merge([7]) => [7]
			right = merge([2]) => [2]
			right = lastStep([7], [2]) ==>> [2,7]
		}
		left = lastStep([5], [2,7]) ==>> [2,5,7]
	}
	2nd recursion {
		right = merge([0,100,4]) ==>> {
			left = {
				merge[0] => [0]
			}
			right = {
				merge([100,4]) =>
				left = merge([100]) => [100]
				right = merge([4]) => [4]
				right = lastStep([100], [4]) = [4,100]
			}
			left = lastStep([0], [4,100]) = [0,4,100]
		}
	}
	lastStep([2,5,7], [0,4,100]) ==>> [0,2,4,5,7,100]
*/

/************************************************************ */
/************************************************************ */
// 5. quick sort ==>> have 2 pointer (start, end) and (decrease , increase) if the selected element(pivot) (greater, smaller) than pointers then swap the (start pointer) with pivot and repeat this on the left of the pivot then on the right of the pivot .

//the pivotHelper return index of the pivot ==>> [4,8,2,1,5,7,6,3] ==>> [2,1,3,4,5,8,6,7] ==>> [4] is the pivot what we assume (first index) which is the 3 index in the sorted[] ==>> the pivot which will separate the [] elements and i'll depends on it.
/*
	[4,8,2,1,5,7,6,3]  ==>> {
		1. [4,2,8,1,5,7,6,3] ==>> swap(pivotIndex =1, i=>2) when i < pivot
		2. [4,2,1,8,5,7,6,3] ==>> swap(pivotIndex =2, i=>1) when i < pivot
		3. [4,2,1,3,5,7,6,8] ==>> swap(pivotIndex =3, i=>3) when i < pivot
		4. []
	}
*/
const pivotFuncHelper = (arr, start = 0, end = arr.length - 1) => {
	let pivot = arr[start] // we'll assume in this session the pivot is the first index
	let pivotIndex = start
	//1. loop arr[]
	for(let i = start + 1; i <= end; i++) {
		//2. compare the pivot with [elements] & if pivot > ele => increase pivotIndex & swap (ele, pivotIndex)
		if(pivot > arr[i]) {
			pivotIndex++
			[arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]] //swap them
			// console.log([pivotIndex, arr[i]])
		}
	}
	//3. swap(pivot(start), pivotIndex)
	[arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
	//4. return pivotIndex
	return pivotIndex 
}
console.log('pivotHelper', pivotFuncHelper([4,8,2,1,5,7,6,3]))

//quick sort ==>> 
const quickSort = (arr, start = 0, end = arr.length - 1) => {
	if(start < end) { //base case
		let pivotIndex = pivotFuncHelper(arr, start, end)
		quickSort(arr, start, pivotIndex - 1) //recursion on left side (until pivotIndex)
		quickSort(arr, pivotIndex + 1, end) //recursion on right side (from pivotIndex)
	}
	return arr
}
console.log('quick sort', quickSort([4,8,2,1,5,7,6,3]))

/************************************************************************* */
/************************************************************************* */
//6. radix sort ==>> make an [] with length 10 [0 => 9] and push [...nums] depends on the digit number onto this new[] in his index number and repeat this operation on all digits(1s, 10s, 100s, 1000s) then it will be sorted when it's done. ==>> moving them into the new[] then regrouping in it again

// a. getDigitHelper ==>> return the digit number
const getDigitHelper = (num, index) => {
	//(get(57, 1) ==>> (57/10) % 10 = floor(5.7) % 10 = 5)
	return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
}
console.log('digit', getDigitHelper(57, 0))

//b. digitsCountHelper ==>> to get teh number of digits to know how many times need to sort to reorder everything

// log10(100) => 10^n = 3 => n = 2
// floor(log10(21388)) + 1 ==>> give u digitsCount => 4 + 1 = 5 => (21388) 5 digits. => i increase 1 because any number less than 10 will give 0.545522887 so i need to add +1 to know if 1s or 10s or 100s or 1000s .
// max(5, 9) => 9
const digitsCountHelper = (num) => {
	if(num === 0) return 1 // it would return -Infinity // special case
	return Math.floor(Math.log10(Math.abs(num))) + 1
}
console.log('digit count', digitsCountHelper(57355)) // 5 digits

// c. biggestDigitCountHelper ==>> to know the biggest number of digitsCount on the [] [5,55,777] ==>> 3 as 777 is 3 digits and the biggest digits count. ==>> to know the length of loop
const biggestDigitCountHelper = (numsArr) => {
	let maxDigit = 0
	for(let num of numsArr) {
		maxDigit = Math.max(maxDigit, digitsCountHelper(num))
	}
	return maxDigit
}
console.log('biggest', biggestDigitCountHelper([4,0,77,8888,44,106415]))

const radixSort = (numsArr) => {
	//1. get the biggest digit to make the loop length
	let maxDigit = biggestDigitCountHelper(numsArr)
	//2. loop until biggest length of digits
	for(let digit = 0; digit < maxDigit; digit++) {
		//3. generate [] 10 length every new digits loop
		let tempArr = Array.from({length: 10}, () => []) // [[], [], [], ...]
		//4. loop to sort the 1s, 10s, 100s, ... depends on digits
		for(let num of numsArr) {
			let digitNumber = getDigitHelper(num, digit)
			tempArr[digitNumber].push(num) //[]3 = 3
		}
		// console.log('temp', tempArr)
		// ** every time temp[] will loop on new sorted digits numsArr[] so it'll be sorted at the end
		numsArr = [].concat(...tempArr) 
		// console.log('arr',numsArr)
	}
	return numsArr
}
// radixSort([5,55,7,9,5460])
console.log(radixSort([5,55,7,9,5460]))

/**
 * [5,55,7,9,5460]
 * without recollect the nums => without it numsArr = [].concat(...tempArr) 
 * [[ 5460 ], [], [], [], [], [ 5, 55 ], [], [ 7 ], [], [ 9 ]] ==>> [5460,5,55,7,9]
[ [ 5, 7, 9 ], [], [], [], [], [ 55 ], [ 5460 ], [], [], [] ] ==>> [5,7,9,55,5460]
[ [ 5, 55, 7, 9 ], [], [], [], [ 5460 ], [], [], [], [], [] ] ==>> []
[ [ 5, 55, 7, 9 ], [], [], [], [], [ 5460 ], [], [], [], [] ]
 * after recollect the nums after sorted digits loop with it numsArr = [].concat(...tempArr) 
[[ 5460 ], [], [], [], [], [ 5, 55 ], [], [ 7 ], [], [ 9 ]]
[ 5460, 5, 55, 7, 9 ]
[ 5460, 5, 55, 7, 9 ] ==>> [ [ 5, 7, 9 ], [], [], [], [], [ 55 ], [ 5460 ], [], [], [] ]
[ 5, 7, 9, 55, 5460 ]
[ 5, 7, 9, 55, 5460 ] ==>> [ [ 5, 7, 9, 55 ], [], [], [], [ 5460 ], [], [], [], [], [] ]
[ 5, 7, 9, 55, 5460 ]
[ 5, 7, 9, 55, 5460 ] ==>> [ [ 5, 7, 9, 55 ], [], [], [], [], [ 5460 ], [], [], [], [] ]
[ 5, 7, 9, 55, 5460 ]
 */