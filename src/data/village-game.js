export const WORLD = { left: 85, right: 915, top: 342, bottom: 572 };
export const START = { x: 500, y: 465 };
// Unmarked clearing off the western path, hinted at by a single orange leaf.
export const SECRET = { x: 105, y: 555, radius: 22 };
export function atSecret(position, radius = SECRET.radius) {
  return Math.hypot(position.x - SECRET.x, position.y - SECRET.y) <= radius;
}
export const LOCATIONS = [
  { id: 'about', x: 210, y: 380, color: '#426f99', symbol: '火' },
  { id: 'projects', x: 790, y: 380, color: '#365f86', symbol: '任務' },
  { id: 'skills', x: 315, y: 535, color: '#3c6987', symbol: '道場' },
  { id: 'contact', x: 685, y: 535, color: '#46698d', symbol: '一楽' },
];
// Foot-position collision bounds leave the paths in front of each building open.
export const OBSTACLES = LOCATIONS.map(s => ({ left: s.x - 83, right: s.x + 83, top: s.y - 165, bottom: s.y - 20 }));
export function walkable(x, y) {
  return x >= WORLD.left && x <= WORLD.right && y >= WORLD.top && y <= WORLD.bottom &&
    !OBSTACLES.some(o => x > o.left && x < o.right && y > o.top && y < o.bottom);
}
export function movePlayer(position, dx, dy, distance) {
  const length = Math.hypot(dx, dy);
  if (!length) return { ...position };
  let { x, y } = position;
  const nextX = x + dx / length * distance, nextY = y + dy / length * distance;
  if (walkable(nextX, y)) x = nextX;
  if (walkable(x, nextY)) y = nextY;
  return { x, y };
}
// A small grid finds a route around the dojo and ramen shop instead of walking through them.
export function findRoute(from, destination) {
  const step = 10, snap = n => Math.round(n / step) * step;
  const start = { x: snap(from.x), y: snap(from.y) };
  const target = { x: snap(destination.x), y: snap(destination.y) };
  if (!walkable(destination.x, destination.y) || !walkable(target.x, target.y)) return [];
  const id = p => `${p.x},${p.y}`, queue = [start], parents = new Map([[id(start), null]]);
  let end;
  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];
    if (current.x === target.x && current.y === target.y) { end = current; break; }
    for (const [dx, dy] of [[step,0],[-step,0],[0,step],[0,-step]]) {
      const next = { x: current.x + dx, y: current.y + dy };
      if (walkable(next.x, next.y) && !parents.has(id(next))) { parents.set(id(next), current); queue.push(next); }
    }
  }
  if (!end) return [];
  const route = [];
  while (parents.get(id(end))) { route.unshift(end); end = parents.get(id(end)); }
  route.push({ x: destination.x, y: destination.y });
  return route;
}
