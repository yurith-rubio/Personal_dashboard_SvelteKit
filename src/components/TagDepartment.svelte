<script lang="ts">
    export let color: TagColor = "gray";
    export let text: string = "";
</script>

<span class="{text} {color}">{text}</span>

<style>
  /* Colors */
    .gray {
        color: var(--gray);
        background-color: var(--light-gray);
    }
    .yellow {
      color: var(--yellow);
      background-color: var(--light-yellow);
    }
    .blue {
        color: var(--blue);
        background-color: var(--light-blue);
    }
    .green {
        color: var(--green);
        background-color: var(--light-green);
    }
</style>