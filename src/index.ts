import { Board } from "./ui/Board";
import { MAX_ROOM_COUNT, MAX_ROOM_SIZE, MIN_ROOM_SIZE } from "./config";
import { buildWorld } from "./game/buildWorld";

function main() {
  const board = new Board({ cellSize: 15 });

  const world = buildWorld({
    width: board.width,
    height: board.height,
    minRoomSize: MIN_ROOM_SIZE,
    maxRoomSize: MAX_ROOM_SIZE,
    maxRoomCount: MAX_ROOM_COUNT,
  });

  world.forEach((c) => board.set(c));
}

window.onload = main;
