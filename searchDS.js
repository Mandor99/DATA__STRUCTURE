//1. ex. linear search => return the index : -1
const linearSearch1 = (arr, ele) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ele) return i;
	}
	return -1;
};
console.log(linearSearch1([5, 2, 1, 3], 3));

// 2. ex. binary search ==>> return index : -1
const binarySearch1 = (arr, ele) => {
	let startPointer = 0;
	let endPointer = arr.length - 1;
	let middle = Math.floor((startPointer + endPointer) / 2);
	// console.log(startPointer, endPointer, middle);
	while (arr[middle] !== ele && startPointer <= endPointer) {
		if (ele < arr[middle]) endPointer = middle - 1;
		else startPointer = middle + 1;
		middle = Math.floor((startPointer + endPointer) / 2);
		console.log(startPointer, endPointer, middle);
	}
	return ele === arr[middle] ? middle : -1;
};
console.log(binarySearch1([1, 3, 7, 8, 10, 77], 6));

// 3. ex. string search ==>> ('lorie', 'lol') =>

/* 1st solution =>
    1loop (0[0,1,2], [0,1,2])=> [[l,l] t, [o,o] t, [l,r] f] break
    2loop (1[1,2,3],[0,1,2])=> [[l,o] f] break
    ...
    6loop (6[6,7,8],[0,1,2])=> [[l,l] t, [o,o] t, [l,l] t] count++
    ... until end loop
*/
const stringSearch1 = (long, short) => {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break; //break to not continue in the next line
			if (j === short.length - 1) count += 1;
		}
	}
	return count;
};
console.log(stringSearch1('lorie lolelol', 'lol'));

//2nd solution ==>> KMP algorithm
// ...
/************************************************************** */
/************************************************************** */