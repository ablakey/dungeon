export const Tiles = {
  Floor: "⬜",
  Wall: "⬛",
  Other: "🟧",
  Maze: "⬜",
  Test: "🟥",
} as const;

// Room generation.
export const MIN_ROOM_SIZE = 3;
export const MAX_ROOM_SIZE = 9;
export const MAX_ROOM_COUNT = 200;
export const MAX_ROOM_ITERATIONS = 10000;
