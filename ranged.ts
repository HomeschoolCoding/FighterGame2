// YOUR TASK: turn the upward throw into a useful ranged attack.
namespace Ranged {
    // STUDENT TASK START: Ranged attack: turn the upward throw into a useful shot (#13)
    // CHANGE THIS FIRST: change the projectile velocity and launch height in fire().
    // Use Fighters.facing(playerNumber); then tune damage in start() and nextThrow.
    // Keep the owner check and projectile cleanup.
    let nextThrow = [0, 0, 0, 0, 0]

    export function fire(playerNumber: number): void {
        let fighter = Fighters.spriteFor(playerNumber)
        if (!fighter || game.runtime() < nextThrow[playerNumber]) return
        nextThrow[playerNumber] = game.runtime() + 300
        // TODO: shoot sideways using Fighters.facing(playerNumber).
        // This black square currently flies straight up, away from opponents.
        let shot = sprites.createProjectileFromSprite(img`
            ffff
            ffff
            ffff
            ffff
        `, fighter, 0, -90)
        shot.y = fighter.top - 3
        shot.data = playerNumber
        shot.lifespan = 1200
    }

    export function start(): void {
        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (shot, target) {
            for (let n = 1; n <= 4; n++) {
                if (n != shot.data && Fighters.spriteFor(n) == target) {
                    // TODO: tune damage and cooldown for a fair ranged attack.
                    Fighters.hurt(n, 1)
                    shot.destroy()
                }
            }
        })
    }
    // STUDENT TASK END: Ranged attack: turn the upward throw into a useful shot

}
