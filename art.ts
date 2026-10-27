// YOUR TASK: fighter artwork. Edit only this file.
namespace FighterArt {
    export function imageFor(playerNumber: number): Image {
        // Original student character from the babysprite branch.
        let picture = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . d d . . . . . . . .
    . . . . . d d d d . . . . . . .
    . . . . d d d d d d . . . . . .
    . . . . d f d d f d . . . . . .
    . . . . d d f f d d . . . . . .
    . d . . d d d d d d . . . d d .
    . d d . 1 1 1 1 1 1 . . d d . .
    . . d d 1 1 1 1 1 1 d d d . . .
    . . . . 1 1 1 1 1 1 . . . . . .
    . . . . d . . . . d . . . . . .
    . . . . d . . . . d . . . . . .
    . . . d d . . . d d . . . . . .
    . . . . . . . . . . . . . . . .
`
        // Four costumes make online players easy to identify.
        let colors = [2, 8, 5, 7]
        picture.replace(1, colors[playerNumber - 1])
        return picture
    }
}
