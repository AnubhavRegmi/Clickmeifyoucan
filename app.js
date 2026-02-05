const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const ok = document.getElementById('ok');

    ok.addEventListener('click', () => {
        window.open('accept.html', '_blank');
    });

    button.addEventListener('mouseover', () => {
        button.style.position = 'fixed';
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});
