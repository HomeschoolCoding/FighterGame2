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
        // TODO: keep this student's character and design four distinct costumes.
        // Right now every player wears the same unfinished white outfit.
        return picture
    }
}
