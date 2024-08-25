document.querySelector('.generate-btn').addEventListener('click', function() {
    const wishes = [
        "Happy Birthday,  Thirisha! You bring joy to everyone around you!",
        "To the most wonderful person I know,  Thirisha, Happy Birthday! 🎉",
        "May your day be as bright and cheerful as you are,  Thirisha.",
        "Wishing you a day full of smiles and happiness,  Thirisha!",
        "Happy Birthday,  Thirisha! You always know how to make things better!",
        "Another year to celebrate how amazing you are,  Thirisha. Happy Birthday!"
    ];

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    displayWish(randomWish);
});

function displayWish(text) {
    const wishTextElement = document.querySelector('.wish-text');
    wishTextElement.textContent = text;  // Directly display the selected wish

    // Confetti animation
    const confetti = document.querySelector('.confetti');
    confetti.style.animation = 'confetti 2.5s infinite';
    setTimeout(() => confetti.style.animation = '', 2500);
}
document.addEventListener('DOMContentLoaded', () => {
    const cake1 = document.getElementById('cake1');
    const cake2 = document.getElementById('cake2');

    function moveCake(event) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.width / 2;
        const y = event.clientY - rect.height / 2;

        event.target.style.left = `${x}px`;
        event.target.style.top = `${y}px`;
    }

    cake1.addEventListener('click', moveCake);
    cake2.addEventListener('click', moveCake);

    // For touch devices
    cake1.addEventListener('touchstart', moveCake);
    cake2.addEventListener('touchstart', moveCake);
});
