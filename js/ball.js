var KEYCODE_LEFT = 37,
    KEYCODE_RIGHT = 39,
    KEYCODE_UP = 38,
    KEYCODE_DOWN = 40,
    stage,
    ball;

function init() {

    //INIT
    stage = new createjs.Stage("canvas");
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.setInterval(1);
    createjs.Ticker.setFPS(60);

    //CREAZIONE PALLA
    ball = new createjs.Shape().set({
        x: 200,
        y: 570
    });
    ball.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
    stage.addChild(ball);

    stage.update(event);
    document.onkeydown = keyPressed;
}

function jump() {
    createjs.Tween.get(ball,null,true).to({
        y: ball.y - 250
    }, 1000, createjs.Ease.quadOut)
    .to({
        y: 570
    }, 1500, createjs.Ease.bounceOut);

}

function keyPressed(event) {

    var spostamento = 300;
    var peso = 2000;
    switch (event.keyCode) {
        case KEYCODE_LEFT:
            //ball.x -= 10;
            createjs.Tween.get(ball,null,true)
            .to({
                x: ball.x - spostamento
            }, peso, createjs.Ease.linear);
            break;
        case KEYCODE_RIGHT:
        createjs.Tween.get(ball,null,true)
        .to({
                x: ball.x + spostamento
            }, peso, createjs.Ease.linear);  
            break;
        case KEYCODE_UP:
            //ball.y -= 5;
            jump();
            break;
            /*case KEYCODE_DOWN:
                ball.y += 5;
                break;
                */
    }
    stage.update();
}
