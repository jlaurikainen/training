<script lang="ts">
  import { db } from "@/db";
  import type { Workout } from "@/types/workout";
  import { liveQuery } from "dexie";

  function groupWorkoutsByDate(w: Workout[]) {
    return Object.groupBy(w, (w) => w.date);
  }

  const workouts = liveQuery(() =>
    db.workouts.toArray().then(groupWorkoutsByDate)
  );
</script>

<div>
  {#if $workouts}
    {#each Object.entries($workouts) as [date, w]}
      <h2>{new Date(date).toLocaleDateString("fi")}</h2>

      {#if w}
        {#each w as workout}
          <div>
            <h3>{workout.name}</h3>

            <ul>
              <li>Reps:{workout.reps}</li>
              <li>Sets: {workout.sets}</li>
              <li>Weight: {workout.weight}</li>
            </ul>
          </div>
        {/each}
      {/if}
    {/each}
  {/if}
</div>

<style></style>
