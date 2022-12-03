const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

const ruckSort = () => {
	const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Add +1 for index offset!
	// let sortedItems = []; // Part 1
	// let summedItems = []; // Part 1

	let groupedItems = []; // Part 2

	const calculateCommonBadges = () => {
		let arr = input.split('\r\n');

		for (let i = 0; i < arr.length; i += 3) {
			groupedItems.push(arr.slice(i, i + 3));
		}

		let commonItems = []; // Items that are common in all 3.

		groupedItems.forEach((group) => {
			for (let i = 0; i < group[0].length; i++) {
				let letter = group[0][i];
				// check if the letter occurs in the first, second, and third strings
				if (
					group[0].includes(letter) &&
					group[1].includes(letter) &&
					group[2].includes(letter)
				) {
					// letter is the only common letter
					commonItems.push(letter);
					break;
				}
			}
		});

		console.log(groupedItems.length, commonItems.length);

		// Calculate Array Sum
		let groupSum = [];
		commonItems.forEach((item) => {
			groupSum.push(items.indexOf(item) + 1);
		});
		console.log(groupSum.reduce((p, c) => p + c));
	};

	// Part 1 ---
	// input.split('\r\n').forEach((e) => {
	// 	const comp1 = e.substring(0, e.length / 2);
	// 	const comp2 = e.substring(e.length / 2, e.length);

	// 	let commonItems = [];
	// 	comp1.split('').forEach((e) => {
	// 		if (comp2.includes(e)) {
	// 			if (commonItems.includes(e)) return;
	// 			commonItems.push(e);
	// 		}
	// 	});
	// 	sortedItems.push(commonItems);
	// });

	// const calculateSum = () => {
	// 	inputArr.forEach((arr) => {
	// 		// Sub this out for summedItems for Part 1
	// 		let arrSum = 0;
	// 		arr.forEach((item) => {
	// 			arrSum += items.indexOf(item) + 1;
	// 		});
	// 		summedGroups.push(arrSum);
	// 	});
	// 	console.log(summedGroups.reduce((p, c) => p + c));
	// };

	// calculateSum(); // Part 1
	// console.log(sortedItems); // Part 1

	calculateCommonBadges(); // Part 2
};

ruckSort();
