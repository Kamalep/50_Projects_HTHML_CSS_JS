
const button = document.getElementById('btn');
const message = document.getElementById('message');


function reStartgame() {
    startGame()
}
function startGame() {
    message.innerText = "استعد...";
    
    // استخدام setTimeout لتأخير ظهور الزر
    setTimeout(() => {
        button.style.display = 'block';
        button.style.top = `${Math.random() * 80}vh`;
        button.style.left = `${Math.random() * 80}vw`;

        message.innerText = "اضغط الآن!";
        // إذا لم يتم الضغط على الزر خلال 3 ثوانٍ
        setTimeout(() => {
            if (button.style.display === 'block') {
                message.innerText = "لقد خسرت! 😢";
                button.style.display = 'none';
                setTimeout(reStartgame, 5000 )
            }
        }, 3000);
    }, Math.random() * 2000 + 1000); // يظهر بعد وقت عشوائي بين 1-3 ثوانٍ
}

// حدث الضغط على الزر
button.addEventListener('click', () => {
    message.innerText = "لقد فزت! 🎉";
    button.style.display = 'none';
    setTimeout(reStartgame, 5000 )
});

// بدء اللعبة
startGame();

