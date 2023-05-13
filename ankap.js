


const obj = {
    name: 'vazgen',
    arr: [],
    bool: false,
    num: 1,
    un: undefined,
    sayHi() {
        console.log('asdasd');
    }
};

const obj1 = new Object();

const colors = ['red', 'blue', 'yellow', 'green', 'brown', 'black', 'pink', 'grey', 'purple'];
const randColor = () => {
    const index = Math.round(Math.random() * 10);
    return colors[index];
};
class Circle {
    constructor() {
        const el = document.createElement('div');
        this.el = el;
        el.classList.add('circle');
        el.style.background = randColor();
        document.body.appendChild(el);
        this.changePosition();
    }
    changePosition() {
        const left = Math.round(Math.random() * 1000);
        const top = Math.round(Math.random() * 1000);
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
    }
}
const circles = [];
setInterval(() => {
    const circle = new Circle();
    circles.push(circle);
}, 1000);

setInterval(() => {
    circles.forEach((circle) => {
        circle.changePosition();
    });
}, 4000);