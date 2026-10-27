// YOUR TASK: punches and attack feedback. Edit only this file.
namespace Combat {
    let nextPunch = [0, 0, 0, 0, 0]

    export function punch(playerNumber: number): void {
        let attacker = Fighters.spriteFor(playerNumber)
        if (!attacker || game.runtime() < nextPunch[playerNumber]) return
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
}
