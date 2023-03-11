const btn = document.getElementById('btn');
const song = document.getElementById('song');
const wish = document.querySelector('.section');
btn.addEventListener('click', () => {
    song.play();
    wish.style.visibility = 'visible';
});