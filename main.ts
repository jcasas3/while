input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Whole))
        counter += 1
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    counter = 0
    for (let index2 = 0; index2 < 6; index2++) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Whole))
        counter += 1
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    for (let counter = 0; counter <= 5; counter++) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
let counter = 0
let index = 4
while (index >= 0) {
    led.plot(index, index)
    basic.pause(100)
    index += -1
}
basic.forever(function () {
	
})
