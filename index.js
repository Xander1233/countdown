let time = "1 Jan " + (new Date().getFullYear() + 1);
let targetDate = new Date(time);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const target = document.getElementById("target");

function start() {

	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});

	time = params.time ?? time;

	console.log(time);

	let validTime = new Date(time);

	if (validTime.toString() === "Invalid Date") {
		target.innerHTML = "Invalid Date";
		return;
	}

	targetDate = validTime;
	
	target.innerHTML = time;

	setInterval(countDown, 1000);
}

start();

function countDown() {

	console.log(time)

	const currentDate = new Date();

	const diff = (targetDate.getTime() - currentDate.getTime()) / 1000;

	const days = Math.floor(diff / (60 * 60 * 24));
	const hours = Math.floor(diff / (60 * 60)) % 24;
	const minutes = Math.floor(diff / 60) % 60;
	const seconds = Math.floor(diff) % 60;

	daysEl.innerHTML = leadingZero(days);
	hoursEl.innerHTML = leadingZero(hours);
	minutesEl.innerHTML = leadingZero(minutes);
	secondsEl.innerHTML = leadingZero(seconds);
}

function leadingZero(num) {
	return num < 10 ? "0" + num : num;
}