import Glitch from './glitch.js';

const infoContent = document.querySelector('.info__content');

document.addEventListener('click', window);
document.addEventListener('keydown', window);

window.handleEvent = event => {
	switch (event.type) {
		case 'click':
			if (event.target.closest('main'))
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
};

const infoName = document.querySelector('.info__my-name');
const glitchName = new Glitch(infoName, 'info__my-name-glitch', {
	numberGlitchElements: 10,
	textPosition: { minX: -20, minY: -5, maxX: 10, maxY: 5 },
	sizeGlitchBox: { maxWidth: 200, maxHeight: 20 },
	frequency: { min: 4, max: 7 },
	background: '#242933',
	color: 'white',
});

infoName.addEventListener('mouseenter', event => {
	glitchName.start();
});
infoName.addEventListener('mouseleave', event => {
	glitchName.stop();
});
