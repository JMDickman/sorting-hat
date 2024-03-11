input.onGesture(Gesture.Shake, function () {
    number = randint(0, 3)
    if (number == 0) {
        basic.showString("You belong in Hufflepuff!")
    } else if (number == 1) {
        basic.showString("You belong in Ravenclaw!")
    } else if (number == 2) {
        basic.showString("You belong in Slytherin!")
    } else if (number == 3) {
        basic.showString("You belong in Gryffindor!")
    }
})
let number = 0
basic.showString("Shake Me")
