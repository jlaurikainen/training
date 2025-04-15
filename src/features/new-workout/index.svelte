<script lang="ts">
  import Button from "@/components/button/index.svelte";

  let dialog: HTMLDialogElement;

  function openDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
  }
</script>

<Button class="fixed bottom-2 inset-x-2" onclick={openDialog}>
  Start New Workout
</Button>

<dialog bind:this={dialog} oncancel={closeDialog} onclose={closeDialog}>
  Hello
</dialog>
