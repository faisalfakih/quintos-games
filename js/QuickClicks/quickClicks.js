const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

const impTarget = `
  .d88b. 
.8P   Y8.
88     88
88     88
 8b   d8 
 'Y88P' `;
let points = 0;

// TODO: find the range of row and column values the target can be placed at
function makeTargets() {
	let row = round(random(1, 23));
	let col = round(random(1, 71));

	button(target, row, col, Normal());
	for (let i = 0; i < 4; i++) {
		row = round(random(1, 23));
		col = round(random(1, 71));
		button(impTarget, row, col, Impostor());
	}
}

function Normal() {
	points += 1;
	makeTargets();
}
function Impostor() {
	points -= 1;
	makeTargets();
}

function start() {
	makeTargets();
}
