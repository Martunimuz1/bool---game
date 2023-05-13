class Ball {

    constructor(obj) {
        const ballEl = document.createElement('div');
        ballEl.classList.add('ball');
        ballEl.style.background = obj.color;
        ballEl.style.height = obj.height;
        ballEl.style.width = obj.width;



        document.body.appendChild(ballEl);
        this.initListeners();
        this.ballEl = ballEl;
        this.top = 0;
        this.left = 0;
        this.speed = obj.speed;
        this.controls = obj.controls;
        this.ballEl.style.height = `${this.height}px`;
        this.ballEl.style.width = `${this.width}px`;

    }
    moveRight() {
        this.left += this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveLeft() {
        this.left -= this.speed;
        this.ballEl.style.left = `${this.left}px`;
    }
    moveDown() {
        this.top += this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    moveUp() {
        this.top -= this.speed;
        this.ballEl.style.top = `${this.top}px`;
    }
    initListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case this.controls.left:
                    this.moveLeft();
                    break;
                case this.controls.right:
                    this.moveRight();
                    break;
                case this.controls.up:
                    this.moveUp();
                    break;
                case this.controls.down:
                    this.moveDown();
                    break;
                default:
            }
        });
    }
}

// const barr = new Ball({
//     color: 'green',
//     speed: 20,
// });