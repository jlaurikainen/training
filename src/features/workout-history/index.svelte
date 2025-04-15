<script lang="ts">
  import Button from "@/components/button/index.svelte";
  import { db } from "@/db";
  import { liveQuery } from "dexie";

  const workouts = liveQuery(() => db.workouts.toArray());
</script>

<h1 class="text-3xl mb-4">Workout History</h1>

{#if workouts}
  {#each $workouts as workout}
    <h2 class="text-lg mb-4">
      {new Date(workout.date).toLocaleDateString("fi")}
    </h2>

    {#each workout.exercises as exercise}
      <div class="mb-4">
        <h3 class="mb-2">{exercise.name}</h3>

        {#each exercise.sets as set}
          <p>Reps: {set.reps} @ {set.weight}kg</p>
        {/each}
      </div>
    {/each}
  {/each}
{/if}

<Button>New Workout</Button>
