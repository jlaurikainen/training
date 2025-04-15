<script lang="ts">
  import { db } from "@/db";
  import { liveQuery } from "dexie";

  const workouts = liveQuery(() => db.workouts.toArray());
</script>

<h1 class="text-3xl mb-4">Workouts</h1>

{#if workouts}
  {#each $workouts as workout}
    <h2 class="text-lg mb-4 text-gray-400">
      {new Date(workout.date).toLocaleDateString("fi")}
    </h2>

    <section>
      {#each workout.exercises as exercise}
        <div class="mb-4">
          <h3 class="mb-2">{exercise.name}</h3>

          <div class="ml-4">
            {#each exercise.sets as set}
              <p>{set.reps} x {set.weight}kg</p>
            {/each}
          </div>
        </div>
      {/each}
    </section>
  {/each}
{/if}
