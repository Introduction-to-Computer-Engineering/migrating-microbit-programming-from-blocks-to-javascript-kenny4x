// This is the code for section 7

// input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, Math.randomRange(0, 5))
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
