const btn = document.getElementById('btn');
const song = document.getElementById('song');
const wish = document.querySelector('.section');
btn.addEventListener('click', () => {
    song.play();
    wish.style.visibility = 'visible';
});

function addHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.innerText = '🤍';

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(addHeart, 300);
