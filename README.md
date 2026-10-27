# Fighter Game 2: student starting points

The game runs with normal controls, but its mechanics and artwork need student work. Improving one assigned feature is the goal; leaving the starter unchanged is not complete. Existing student artwork is preserved.

## Start today

1. Choose one of the four Ready cards on [your board](https://github.com/orgs/HomeschoolCoding/projects/3) with your team.
2. In [MakeCode Arcade](https://arcade.makecode.com), use **Import → Import URL** and your exact task branch URL below. Start with a fresh import, not an old browser copy of master.
3. Open JavaScript → Explorer → Files. Edit only your task file and check the repository and branch before every push.
4. Use your card's normal playtest to show what you changed.

| Task | File | Starting weakness | Import URL |
| --- | --- | --- | --- |
| [Combat: make weak punches useful and fair](https://github.com/HomeschoolCoding/FighterGame2/issues/9) | `combat.ts` | Punches work, but deal only 1 damage against 100 health. A fight takes about 100 successful hits; the starter cooldown is 700 ms. | `https://github.com/HomeschoolCoding/FighterGame2#codex-punches` |
| [Defense: replace the unlimited block with a fair shield](https://github.com/HomeschoolCoding/FighterGame2/issues/10) | `defense.ts` | Holding DOWN subtracts one point from every hit with no cooldown. It makes the starter 1-damage punches harmless forever, and is too weak once combat damage increases. | `https://github.com/HomeschoolCoding/FighterGame2#codex-shield` |
| [Fighter art: develop four costumes from the student character](https://github.com/HomeschoolCoding/FighterGame2/issues/7) | `art.ts` | The original student-made fighter is kept, but every player has the same white outfit. The generated four-color costumes have been removed. | `https://github.com/HomeschoolCoding/FighterGame2#codex-fighter-art` |
| [Arena: replace the gray placeholder with a stage](https://github.com/HomeschoolCoding/FighterGame2/issues/5) | `arena.ts` | There is only a gray screen and a floor guide. The generated buildings, ground colors and finished scenery have been removed. | `https://github.com/HomeschoolCoding/FighterGame2#codex-arena-design` |

## Normal controls

Left/right move, A jumps, B punches and DOWN blocks. Punches currently do just 1 damage against 100 health, so fights drag on. Holding DOWN subtracts one point forever, making those weak punches harmless; the shield needs a fair recharge. Wait one second after joining/respawning before testing damage.

The original student-made 16 x 16 fighter is preserved, but every player has the same white outfit. The stage is a gray placeholder with a floor guide at y = 106. Original babysprite and tilemap work remains on its original branches.

## Multiplayer and finishing

The teacher helper in `main.ts` supplies four-player connection/disconnection and movement. Use simulator player buttons 2–4 for local testing. Native online play uses Share → Host a multiplayer game, then classmates join at https://aka.ms/a9 or the host link. Playing together is separate from editing a branch. Actual online sign-in testing remains for the teacher.

Commit and push to your task branch, then open a PR for review. While the revised baseline PR is open, target `codex-student-challenges`; after it merges, the teacher synchronizes branches and retargets student PRs to master. Never push directly to master. Stay in JavaScript and leave other students' files, `main.ts`, `pxt.json` and GitHub settings for the teacher.

The teacher should merge the revised baseline before student PRs. After a squash merge, synchronize master into task branches while preserving any student commits. Each card has specific before/after checks; the unchanged starter does not pass.
