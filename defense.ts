// YOUR TASK: shielding. Edit only this file.
namespace Defense {
    // STUDENT TASK START: Defense: replace the unlimited block with a fair shield (#10)
    // CHANGE THIS FIRST: replace the unlimited one-point reduction in damageTaken().
    // Add per-player recharge state here and return the damage that reaches health.
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
    // STUDENT TASK END: Defense: replace the unlimited block with a fair shield

}
