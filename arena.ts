// YOUR TASK: arena design. Edit only this file.
namespace Arena {
    // Keep this floor height: the movement helper lands fighters here.
    export function floorY(): number { return 106 }

    // STUDENT TASK START: Arena: replace the gray placeholder with a stage (#5)
    // EDIT draw() here: replace the gray fill with your own stage artwork.
    // Keep floorY() unchanged and leave health/controls readable.
    export function draw(): void {
        let background = image.create(160, 120)
        // TODO: build a themed stage. This gray screen is only a placeholder.
        background.fill(13)
        background.drawLine(0, floorY(), 159, floorY(), 12)
        scene.setBackgroundImage(background)
    }
    // STUDENT TASK END: Arena: replace the gray placeholder with a stage

}
