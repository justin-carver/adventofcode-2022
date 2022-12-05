const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

const campCleanup = () => {
	let pairs = 0;
	let overlap = 0;
	input.split('\r\n').forEach((line) => {
		const ranges = line.split(',');
		const left = ranges[0].split('-');
		const right = ranges[1].split('-');

		// Check both sides!
		if (
			parseInt(left[0]) <= parseInt(right[0]) &&
			parseInt(left[1]) >= parseInt(right[1])
		) {
			pairs++;
		} else if (
			parseInt(right[0]) <= parseInt(left[0]) &&
			parseInt(right[1]) >= parseInt(left[1])
		) {
			pairs++;
		}
	});

	console.log(`Total Pairs: ${pairs}`);
};

campCleanup();
