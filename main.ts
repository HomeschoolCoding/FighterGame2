// TEACHER HELPER: four-player connection, movement, health and respawn.
// Students edit art.ts, arena.ts, combat.ts or defense.ts instead.
namespace Fighters {
    let characters: Sprite[] = []
    let health = [0, 100, 100, 100, 100]
    let directions = [0, 1, 1, -1, -1]
    let invulnerableUntil = [0, 0, 0, 0, 0]

    export function spriteFor(n: number): Sprite { return characters[n] }
    export function facing(n: number): number { return directions[n] }
    export function isHoldingDown(n: number): boolean {
        return mp.isButtonPressed(mp.getPlayerByNumber(n), mp.MultiplayerButton.Down)
    }
    function spawn(n: number): void {
        let fighter = characters[n]
        fighter.setPosition(24 + (n - 1) * 36, Arena.floorY() - fighter.height / 2)
        fighter.setVelocity(0, 0)
        health[n] = 100
        invulnerableUntil[n] = game.runtime() + 800
    }
    export function hurt(n: number, damage: number): void {
        if (!characters[n] || game.runtime() < invulnerableUntil[n]) return
        health[n] -= Defense.damageTaken(n, damage)
        invulnerableUntil[n] = game.runtime() + 250
        if (health[n] <= 0) spawn(n)
    }
    function connect(player: mp.Player): void {
        let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
        if (characters[n]) return
        let fighter = sprites.create(FighterArt.imageFor(n), SpriteKind.Player)
        characters[n] = fighter
        fighter.ay = 300
        fighter.setStayInScreen(true)
        mp.setPlayerSprite(player, fighter)
        mp.moveWithButtons(player, 65, 0)
        spawn(n)
    }
    export function start(): void {
        Arena.draw()
        mp.setPlayerIndicatorsVisible(true)
        mp.onControllerEvent(ControllerEvent.Connected, function (player) { connect(player) })
        mp.onControllerEvent(ControllerEvent.Disconnected, function (player) {
            let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
            if (characters[n]) characters[n].destroy()
            characters[n] = null
            mp.setPlayerSprite(player, null)
        })
        // Register all four controllers; only connected players get sprites.
        for (let n = 1; n <= 4; n++) {
            let player = mp.getPlayerByNumber(n)
            mp.moveWithButtons(player, 65, 0)
            if (n == 1 || mp.isConnected(player)) connect(player)
        }
        mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
            let n = mp.getPlayerProperty(player, mp.PlayerProperty.Number)
            let fighter = characters[n]
            if (fighter && fighter.bottom >= Arena.floorY() - 1) fighter.vy = -135
        })
        mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {
            Combat.punch(mp.getPlayerProperty(player, mp.PlayerProperty.Number))
        })
        game.onUpdate(function () {
            for (let n = 1; n <= 4; n++) {
                let fighter = characters[n]
                if (fighter) {
                    if (fighter.vx < 0) directions[n] = -1
                    if (fighter.vx > 0) directions[n] = 1
                    if (fighter.bottom >= Arena.floorY() && fighter.vy >= 0) {
                        fighter.bottom = Arena.floorY()
                        fighter.vy = 0
                    }
                }
            }
        })
        scene.createRenderable(100, function (screen) {
            screen.fillRect(0, 0, 160, 10, 15)
            for (let n = 1; n <= 4; n++) {
                if (characters[n]) screen.print("P" + n + ":" + health[n], (n - 1) * 40, 1, 1)
            }
            screen.fillRect(0, 112, 160, 8, 15)
            screen.print("A jump B punch DOWN block", 7, 113, 1)
        })
    }
}
Fighters.start()
