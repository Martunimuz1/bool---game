function start1() {
    class Food {
        constructor(obj) {
            const food = document.createElement('div');
            food.classList.add('food');
            document.body.appendChild(food);
            this.food = food;
            food.style.background = obj.color;
            this.changePosition();
        }
        changePosition() {
            setInterval(() => {
                const left = Math.round(Math.random() * 1000);
                const top = Math.round(Math.random() * 600);
                this.food.style.left = left + 'px';
                this.food.style.top = top + 'px';
            }, 2500)
        }

    }

    const foodType = new Food({
        color: 'black',
    })
}








