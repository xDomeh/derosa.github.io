function playSound() {
    audioLoader.load("sounds/dai.mp3", function(buffer) {
        sound.setBuffer( buffer );
        sound.setRefDistance( 20 );
        sound.play();
    });

    var source = listener.context.createBufferSource();
    source.connect(listener.context.destination);
    source.start();
}

window.addEventListener('touchstart', playSound);
document.addEventListener('click', playSound);

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
});

document.querySelectorAll('.btn')[0].addEventListener('click', function() {
	var sound = new Audio('sounds/si.mp3');
	sound.play();
});
*/