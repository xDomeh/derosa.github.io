/*document.querySelectorAll('.btn')[0].addEventListener('click', function() {
	var sound = new Audio('sounds/si.mp3');
	sound.play();
});

document.querySelectorAll('.btn')[1].addEventListener('click', function() {
	var sound = new Audio('sounds/no.mp3');
	sound.play();
});

document.querySelectorAll('.btn')[2].addEventListener('click', function() {
	var sound = new Audio('sounds/oba.mp3');
	sound.play();
});

document.querySelectorAll('.btn')[3].addEventListener('click', function() {
	var sound = new Audio('sounds/51.mp3');
	sound.play();
});

document.querySelectorAll('.btn')[5].addEventListener('click', function() {
	var sound = new Audio('sounds/dai.mp3');
	sound.play();
});*/

document.querySelectorAll('.btn')[0].addEventListener('click', function initAudio() {
	var audio = new Audio('.sounds/si.mp3');
	var self = this;
	self.audio = audio;
	var startAudio = function() {
		self.audio.play();
		document.removeEventListener('touchstart', self.startAudio, false);
	};
	self.startAudio = startAudio;

	var pauseAudio = function() {
		self.audio.pause();
		self.audio.removeEventListener('play', self.pauseAudio, false);
	};
	self.pauseAudio = pauseAudio;

	document.addEventListener('touchstart', self.startAudio, false);
	self.audio.addEventListener('play', self.pauseAudio, false);
});

document.querySelectorAll('.btn')[1].addEventListener('click', function initAudio() {
	var audio = new Audio('.sounds/si.mp3');
	var self = this;
	self.audio = audio;
	var startAudio = function() {
		self.audio.play();
		document.removeEventListener('touchstart', self.startAudio, false);
	};
	self.startAudio = startAudio;

	var pauseAudio = function() {
		self.audio.pause();
		self.audio.removeEventListener('play', self.pauseAudio, false);
	};
	self.pauseAudio = pauseAudio;

	document.addEventListener('touchstart', self.startAudio, false);
	self.audio.addEventListener('play', self.pauseAudio, false);
});
