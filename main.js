// const barr = new Ball({
//     color: 'green',
//     speed: 20,
//     height: 150,
//     width: 150,
//     controls:{
//         up: 'ArrowUp',
//         down:'ArrowDown',
//         left:'ArrowLeft',
//         right:'ArrowRight',
//     }
// });

// const ball2 = new Ball({
//     color:'blue',
//     speed: 30,
//     controls:{
//         left: 'KeyA',
//         right:'KeyD',
//         up: 'KeyW',
//         down: 'KeyS',
//     }
// });
// console.log(ball);








// const ball = document.querySelector('.ball');

// let left = 0;
// function moveRight() {
//     left += 20;
//     ball.style.left = `${left}px`;
// }

// function moveLeft() {
//     if (left <= 0) {
//         return;
//     }
//     left -= 20;
//     ball.style.left = `${left}px`;
// }

// let topPosition = 0;
// function moveDown() {
//     topPosition += 20;
//     ball.style.top = `${topPosition}px`;
// }

// function moveUp() {
//     if (topPosition <= 0) {
//         return;
//     }
//     topPosition -= 20;
//     ball.style.top = `${topPosition}px`;
// }

// document.addEventListener('keydown', (event) => {
//     console.log(event);
//     switch (event.code) {
//         case 'ArrowLeft':
//             moveLeft();
//             break;
//         case 'ArrowRight':
//             moveRight();
//             break;
//         case 'ArrowUp':
//             moveUp();
//             break;
//         case 'ArrowDown':
//             moveDown();
//             break;
//         default:
//     }
// });
const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', function(){
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;

    if (player1Name && player2Name) {
        
        start();
    } else{
        alert('Please feel inputs');
    }
});