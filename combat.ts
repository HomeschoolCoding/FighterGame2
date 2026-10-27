// YOUR TASK: punches and attack feedback. Edit only this file.
namespace Combat {
    // STUDENT TASK START: Combat: make weak punches useful and fair (#9)
    // CHANGE THIS FIRST: make Fighters.hurt(target, 1) deal useful damage.
    // Then tune nextPunch to a one-second per-player cooldown. Keep range/facing checks.
    let nextPunch = [0, 0, 0, 0, 0]

    export function punch(playerNumber: number): void {
        let attacker = Fighters.spriteFor(playerNumber)
        if (!attacker || game.runtime() < nextPunch[playerNumber]) return
        // TODO: these 1-damage punches take 100 hits to defeat a fighter.
        // Tune damage and implement a fair one-second cooldown per player.
        nextPunch[playerNumber] = game.runtime() + 700
        attacker.sayText("POW", 200, false)
        for (let target = 1; target <= 4; target++) {
            let victim = Fighters.spriteFor(target)
            if (target != playerNumber && victim) {
                let ahead = (victim.x - attacker.x) * Fighters.facing(playerNumber)
                if (ahead >= 0 && ahead < 22 && Math.abs(victim.y - attacker.y) < 18) {
                    Fighters.hurt(target, 10)
                }
            }
        }
    }
    // STUDENT TASK END: Combat: make weak punches useful and fair

}
