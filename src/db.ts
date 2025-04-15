import Dexie, { type EntityTable } from "dexie";
import type { Workout } from "./types/workout";

export const db = new Dexie("database") as Dexie & {
  workouts: EntityTable<Workout, "id">;
};

db.version(1).stores({
  workouts: "++id, date, name, reps, sets, weight",
});
