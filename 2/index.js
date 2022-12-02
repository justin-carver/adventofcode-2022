const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

// Rock = A, X = 1
// Paper = B, Y = 2
// Scissors = C, Z = 3
// Win = 6, Draw = 3, Loss = 0

const rockPaperScissors = () => {
	let playerScore = 0;
	let opponentScore = 0;

	const calculateWinner = (round) => {
		console.log(`${round}`);
		// Rock
		if (round[0] === 'A') {
			if (round[1] === 'Z') {
				console.log('Player Wins!'); // Variable between Step 1 & Step 2
				// opponentScore += 7; // Win + Shape | Part 1
				// playerScore += 3; // Shape | Part 1
				playerScore += 8;
				opponentScore += 1;
			}
			if (round[1] === 'Y') {
				console.log('Draw!');
				// playerScore += 8; // Win + Shape
				// opponentScore += 1; // Shape
				playerScore += 3 + 1;
				opponentScore += 3 + 1;
			}
			if (round[1] === 'X') {
				console.log('Opponent Wins!');
				// playerScore += 3 + 1; // Draw
				// opponentScore += 3 + 1; // Draw
				opponentScore += 7;
				playerScore += 3;
			}
		}

		// Paper
		if (round[0] === 'B') {
			if (round[1] === 'Z') {
				console.log('Player Wins!');
				// opponentScore += 7; // Win + Shape
				// playerScore += 3; // Shape
				playerScore += 9;
				opponentScore += 2;
			}
			if (round[1] === 'Y') {
				console.log('Draw!');
				// playerScore += 8; // Win + Shape
				// opponentScore += 1; // Shape
				playerScore += 3 + 2;
				opponentScore += 3 + 2;
			}
			if (round[1] === 'X') {
				console.log('Opponent Wins!');
				// playerScore += 3 + 1; // Draw
				// opponentScore += 3 + 1; // Draw
				opponentScore += 8;
				playerScore += 1;
			}
		}

		// Scissors
		if (round[0] === 'C') {
			if (round[1] === 'Z') {
				console.log('Player Wins!');
				// opponentScore += 7; // Win + Shape
				// playerScore += 3; // Shape
				playerScore += 7;
				opponentScore += 3;
			}
			if (round[1] === 'Y') {
				console.log('Draw!');
				// playerScore += 8; // Win + Shape
				// opponentScore += 1; // Shape
				playerScore += 3 + 3;
				opponentScore += 3 + 3;
			}
			if (round[1] === 'X') {
				console.log('Opponent Wins!');
				// playerScore += 3 + 1; // Draw
				// opponentScore += 3 + 1; // Draw
				opponentScore += 9;
				playerScore += 2;
			}
		}
	};

	input.split('\r\n').forEach((round) => {
		const play = round.split(' ');
		calculateWinner(play);
	});

	// Output final scores
	console.log(
		`\nPlayer Score: ${playerScore}\nOpponent Score: ${opponentScore}\n`
	);
};

rockPaperScissors();
