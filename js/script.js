const infoContent = document.querySelector('.info__content');

document.addEventListener('click', this);
document.addEventListener('keydown', this);

function handleEvent(event) {
	switch (event.type) {
		case 'click':
			for (let itemInfo of infoContent.children) itemInfo.classList.toggle('none');
			break;
		case 'keydown':
			if (event.code === 'Space') {
				infoContent.innerHTML = '';

				// ! OR

				// while (infoContent.firstChild) {
				// 	infoContent.removeChild(infoContent.lastChild);
				// }
			}
			break;
	}
}
