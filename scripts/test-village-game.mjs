import assert from 'node:assert/strict';
import { atSecret, findRoute, LOCATIONS, movePlayer, SECRET, START, walkable } from '../src/data/village-game.js';

for (const from of [START, ...LOCATIONS]) {
  for (const stop of [...LOCATIONS, { ...SECRET, id:'secret' }]) {
    const route = findRoute(from, stop);
    assert.ok(route.length, `${from.id || 'spawn'} must reach ${stop.id}`);
    assert.deepEqual(route.at(-1), { x: stop.x, y: stop.y });
    assert.ok(route.every(p => walkable(p.x, p.y)), `route to ${stop.id} must avoid buildings`);
    let position = { x: from.x, y: from.y };
    for (const waypoint of route) {
      let attempts = 0;
      while (Math.hypot(waypoint.x-position.x, waypoint.y-position.y) > 1) {
        assert.ok(attempts++ < 100, `movement must not get stuck en route to ${stop.id}`);
        position = movePlayer(position, waypoint.x-position.x, waypoint.y-position.y, Math.min(2,Math.hypot(waypoint.x-position.x, waypoint.y-position.y)));
      }
    }
  }
}
assert.deepEqual(findRoute(START, { x:315, y:450 }), [], 'do not route into the dojo');
assert.deepEqual(movePlayer({ x:85, y:550 }, -1, 0, 10), { x:85,y:550 }, 'keep player inside the map');
assert.deepEqual(movePlayer({ x:315,y:520 },0,-1,10), { x:315,y:520 }, 'block movement into a building');
const diagonal = movePlayer(START,1,1,10);
assert.ok(Math.abs(Math.hypot(diagonal.x-START.x,diagonal.y-START.y)-10) < .001, 'diagonal movement must have the same speed');
assert.equal(atSecret(START),false,'the secret must not trigger at spawn');
assert.ok(LOCATIONS.every(stop => !atSecret(stop)), 'regular locations must not trigger the secret');
assert.equal(atSecret(SECRET),true,'entering the clearing must reveal the secret');
assert.equal(atSecret({ x:SECRET.x+SECRET.radius+1,y:SECRET.y }),false,'nearby paths must not reveal the secret');
console.log('Village navigation checks passed: all stops reachable from spawn and each other; collision and diagonal speed verified.');
