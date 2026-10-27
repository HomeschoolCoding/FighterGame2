# Fighter Game 2

The approved starting point is merged into master. This game intentionally needs student implementation; unchanged starter behavior does not complete a task. Existing student artwork is preserved.

## Start class

1. Choose one of the 5 Ready tasks on [your board](https://github.com/orgs/HomeschoolCoding/projects/3) with the team.
2. Open [MakeCode Arcade](https://arcade.makecode.com), use **Import → Import URL**, and paste your exact task branch below. Use a fresh import; old browser copies do not update automatically.
3. Open JavaScript → Explorer → Files and select your one task file. Find **STUDENT TASK START** and **STUDENT TASK END**. Edit inside those comments and follow the **CHANGE THIS FIRST / WRITE / EDIT** notes. Before editing or pushing, check the repository and branch.
4. Make one small improvement, run your card's checks with a teammate, commit and push to your task branch. When ready today or next class, open a PR into **master** for teacher review.

| Task | File | Starting point | Import URL |
| --- | --- | --- | --- |
| [Combat: make weak punches useful and fair](https://github.com/HomeschoolCoding/FighterGame2/issues/9) | `combat.ts` | Punches work, but deal only 1 damage against 100 health. A fight takes about 100 successful hits; the starter cooldown is 700 ms. | `https://github.com/HomeschoolCoding/FighterGame2#codex-punches` |
| [Defense: replace the unlimited block with a fair shield](https://github.com/HomeschoolCoding/FighterGame2/issues/10) | `defense.ts` | Holding DOWN subtracts one point from every hit with no cooldown. It makes the starter 1-damage punches harmless forever, and is too weak once combat damage increases. | `https://github.com/HomeschoolCoding/FighterGame2#codex-shield` |
| [Ranged attack: turn the upward throw into a useful shot](https://github.com/HomeschoolCoding/FighterGame2/issues/13) | `ranged.ts` | B throws a black square straight upward. It rarely hits an opponent, deals only 1 damage and has a 300 ms cooldown. | `https://github.com/HomeschoolCoding/FighterGame2#codex-ranged-attack` |
| [Fighter art: develop four costumes from the student character](https://github.com/HomeschoolCoding/FighterGame2/issues/7) | `art.ts` | The original student-made fighter is kept, but every player has the same white outfit. The generated four-color costumes have been removed. | `https://github.com/HomeschoolCoding/FighterGame2#codex-fighter-art` |
| [Arena: replace the gray placeholder with a stage](https://github.com/HomeschoolCoding/FighterGame2/issues/5) | `arena.ts` | There is only a gray screen and a floor guide. The generated buildings, ground colors and finished scenery have been removed. | `https://github.com/HomeschoolCoding/FighterGame2#codex-arena-design` |

## Controls and supplied setup

Left/right move, Up jumps, A punches, B throws, and Down blocks.

Four-player connections, movement, health and respawn are supplied. Wait one second after joining/respawning before damage tests. Punches deal only 1 damage against 100 health. The starting block subtracts one point indefinitely, so it needs a fair cooldown. The ranged attack flies up instead of sideways. These are normal game mechanics to improve, not extra test controls.

The student's original 16 x 16 fighter remains, with identical white costumes. The arena is gray with a floor guide at y = 106. Original babysprite and tilemap branches remain preserved. Four students may choose four of the five tasks and leave the remaining task for later.

## Working together

Each task has its own file and prepared branch: `combat.ts`, `defense.ts`, `ranged.ts`, `art.ts`, `arena.ts`. Leave teacher helpers, `main.ts`, `pxt.json`, other students' files and GitHub settings for the teacher. Stay in JavaScript. The branch contains the current classroom baseline, so you can start immediately. Only one student should claim a task branch at a time.

Use small commits and push progress to your branch. When you finish, open a PR into master and include your before/after demonstration. The teacher reviews and merges student changes. After other work is merged, coordinate with the teacher before pulling shared changes or resolving conflicts; never overwrite another student's work.

For simulator testing, connect players 2–4 with their player buttons. Native online play uses Share → Host a multiplayer game, then classmates join at https://aka.ms/a9 or the host link. Playing together is separate from editing code. Actual online sign-in testing remains for the teacher.
