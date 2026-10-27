// YOUR TASK: arena design. Edit only this file.
namespace Arena {
    // Keep this floor height: the movement helper lands fighters here.
    export function floorY(): number { return 106 }

    export function draw(): void {
        let background = image.create(160, 120)
        background.fill(9)
        background.fillRect(0, 76, 160, 30, 8)
        background.fillRect(0, floorY(), 160, 14, 4)
        background.drawLine(0, floorY(), 159, floorY(), 1)
        background.fillRect(12, 54, 12, 22, 10)
        background.fillRect(136, 54, 12, 22, 10)
        scene.setBackgroundImage(background)
    }
}
