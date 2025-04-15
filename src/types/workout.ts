export type Workout = {
  id: number;
  date: string;
  exercises: Exercise[];
};

export type Exercise = {
  name: string;
  sets: ExerciseSet[];
};

export type ExerciseSet = {
  reps: number;
  weight: number;
};
