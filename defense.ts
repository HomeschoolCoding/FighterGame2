// YOUR TASK: shielding. Edit only this file.
namespace Defense {
    export function damageTaken(playerNumber: number, damage: number): number {
        // Hold DOWN to block. Try a fair limit or cooldown for the shield.
        if (Fighters.isHoldingDown(playerNumber)) {
            let fighter = Fighters.spriteFor(playerNumber)
            if (fighter) fighter.sayText("BLOCK", 200, false)
            return Math.idiv(damage, 2)
        }
        return damage
    }
}
