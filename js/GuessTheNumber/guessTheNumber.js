async function start() {
	// your code goes here! below this line

	let hasGuessed = false;
	let num = Math.ceil(Math.random() * 100);
	for (let i = 7; i > 0; i--) {
		let ans = await prompt('Guess a number (1-100)');
		ans = eval(ans);
		if (ans > num) {
			if (ans > 100) {
				await alert('invalid, must be <= 100');
				i++;
			} else {
				await alert(ans + ' is too high');
			}
		} else if (ans < num) {
			if (ans < 1) {
				await alert('invalid, must be >= 1');
				i++;
			} else {
				await alert(ans + ' is too low');
			}
		} else if (ans == num) {
			await alert(ans + ' is correct');
			hasGuessed = true;
		} else {
			await alert('Please enter a number');
			i++;
		}
	}
	if (!hasGuessed) {
		await alert('The answer was ' + num);
	}

	exit();
}
