input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let counter = 0
for (let index = 0; index < 4; index++) {
    counter += 113
}
basic.forever(function () {
	
})
