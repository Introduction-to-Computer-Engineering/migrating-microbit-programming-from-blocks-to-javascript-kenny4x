// This is the code for section 5

// input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 4; i++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
