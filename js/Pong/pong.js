// screen width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball, pL, pR, border, bb;
let timer = 0;

let prevBallY = 0;
let interval = 10;

let player1Points = 0;
let player2Points = 0;
// code in the setup function gets run once at the start of the game

function setup() {
	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');
	let borderImg = spriteArt('w.'.repeat(120));

	// creates a ball sprite and places it in center of the screen
	border = new Sprite();
	border.image = borderImg;
	border.collider = 's';
	border.y = 10;

	bb = new Sprite();
	bb.image = borderImg;
	bb.collider = 's';
	bb.y = 190;

	ball = new Sprite();
	ball.image = imgBall;
	ball.x = width / 2;
	ball.y = height / 2;
	ball.diameter = 8;
	ball.bounciness = 1; // full bounciness
	ball.friction = 0; // no friction

	prevBallY = ball.y;

	// TODO: create paddle sprites
	pL = new Sprite();
	pR = new Sprite();
	pL.collider = 'k';
	pR.collider = 'k';
	pL.image = imgPaddle;
	pR.image = imgPaddle;
	pL.x = 10;
	pR.x = width - 10;
	ball.speed = 3.5;
	ball.direction = Math.random() * 30 + 5;
}

// code in the draw function gets run 60 times per second
function draw() {
	txt(player1Points, 3, 1);
	txt(player2Points, 3, 30);
	background('b');

	ball.speed += 0.005;

	if (ball.x > 256 || ball.x < 0) {
		timer += 1;

		if (timer > 60) {
			if (ball.x < 0) {
				player1Points += 1;
			}
			if (ball.x > 256) {
				player2Points += 1;
			}
			ball.x = 128;
			ball.y = 96;
			ball.speed = 10.5;
			ball.direction = Math.random() * 30 + 5;
			timer = 0;
		}
	}
	if (kb.pressing('w') || kb.pressing('W')) {
		pL.y -= 5;
	}
	if (kb.pressing('S') || kb.pressing('s')) {
		pL.y += 5;
	}

	if (kb.pressing('up2')) {
		pR.y -= 5;
	}
	if (kb.pressing('down2')) {
		pR.y += 5;
	}
	/*
	pL.moveTowards(pL.x, ball.y, 0.1);
	pR.moveTowards(pR.x, ball.y, 0.1); */
}
