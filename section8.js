// This is the code for section 8

// let CoinAHeads = false
let CoinBHeads = false
let PlayerAScore = 0
let PlayerBScore = 0
input.onButtonPressed(Button.A, function () {
    CoinAHeads = Math.randomBoolean()
    CoinBHeads = Math.randomBoolean()
    PlayerAScore = 0
    PlayerBScore = 0
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    CoinAHeads = true
    CoinBHeads = true
    if (CoinAHeads == CoinBHeads) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        PlayerAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        PlayerBScore += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
