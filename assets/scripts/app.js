const adviceTitleEl = document.getElementById('advice-title');
const adviceDescEl = document.getElementById('advice-quote');
const adviceChangeBtn = document.getElementById('advice-change-btn');

function sendHttpRequest(method, url) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.onload = function () {
			resolve(xhr.response);
		};

		xhr.send();
	});

	return promise;
}

async function getAdvice() {
	const responseData = await sendHttpRequest(
		'GET',
		'https://api.adviceslip.com/advice'
	);

	const { id, advice } = responseData.slip;

	adviceTitleEl.innerHTML = `Advice #${id}`;
	adviceDescEl.innerHTML = advice;
}

getAdvice();

adviceChangeBtn.addEventListener('click', getAdvice);
