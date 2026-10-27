// YOUR TASK: shielding. Edit only this file.
namespace Defense {
    export function damageTaken(playerNumber: number, damage: number): number {
        // TODO: this shield has no cooldown and blocks only one point.
        // With the weak starter punches, holding DOWN blocks forever.
        // Build a fair shield that fully blocks one hit, then recharges.
        if (Fighters.isHoldingDown(playerNumber)) {
            let fighter = Fighters.spriteFor(playerNumber)
            if (fighter) fighter.sayText("BLOCK", 200, false)
            return Math.max(0, damage - 1)
        }
        return damage
    }
}
