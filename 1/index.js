const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

const expedition = () => {
	const split = input.split('\r\n');
	const elves = [];
	let totalCalories = 0;
	split.forEach((calories) => {
		if (calories === '') {
			elves.push(totalCalories);
			totalCalories = 0;
		} else {
			totalCalories += parseInt(calories);
		}
	});
	console.log(elves); // Each elf summed individually, unsorted
	console.log(Math.max(...elves)); // Highest calorie elf
	console.log(
		elves
			.sort((a, z) => z - a)
			.slice(0, 3)
			.reduce((p, c) => p + c) // Top 3 elves, summed
	);
};

expedition();
