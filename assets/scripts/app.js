const adviceTitleEl = document.getElementById('advice-title');
const adviceDescEl = document.getElementById('advice-quote');
const adviceChangeBtn = document.getElementById('advice-change-btn');

function sendHttpRequest(method, url) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject(new Error('Something went wrong'));
			}
		};

		xhr.onerror = function () {
			reject(new Error('Failed to send a request'));
		};

		xhr.send();
	});

	return promise;
}

async function getAdvice() {
	try {
		const responseData = await sendHttpRequest(
			'GET',
			'https://api.adviceslip.com/advice'
		);

		const { id, advice } = responseData.slip;

		adviceTitleEl.innerHTML = `Advice #${id}`;
		adviceDescEl.innerHTML = advice;
	} catch (error) {
		alert(error.message);
	}
}

getAdvice();

adviceChangeBtn.addEventListener('click', getAdvice);
