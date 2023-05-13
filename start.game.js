function start(){
    const barr = new Ball({
        color: 'black',
        speed: 20,
        height: 150,
        width: 150,
        controls:{
            up: 'ArrowUp',
            down:'ArrowDown',
            left:'ArrowLeft',
            right:'ArrowRight',
        }
    });
    
    const ball2 = new Ball({
        color:'white',
        speed: 30,
        controls:{
            left: 'KeyA',
            right:'KeyD',
            up: 'KeyW',
            down: 'KeyS',
        }
    });
}