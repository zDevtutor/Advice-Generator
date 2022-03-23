const adviceTitleEl = document.getElementById('advice-title');
const adviceDescEl = document.getElementById('advice-quote');
const adviceChangeBtn = document.getElementById('advice-change-btn');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.adviceslip.com/advice');

xhr.onload = function () {
	const adviceObj = JSON.parse(xhr.response);
	const { id, advice } = adviceObj.slip;

	adviceTitleEl.innerHTML = `Advice ${id}`;
	adviceDescEl.innerHTML = advice;
};

xhr.send();

adviceChangeBtn.addEventListener('click', () => {
	window.location = '/';
});
