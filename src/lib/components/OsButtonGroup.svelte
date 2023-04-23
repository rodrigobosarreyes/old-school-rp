<script lang="ts">
  import { Button, ButtonGroup } from 'sveltestrap';

  export let buttons: any[];
  export let activeBtn: string;

  const handleClick = (btn: any) => {
    activeBtn = btn.id;
    btn.onClick();
  }
</script>

<div>
  <ButtonGroup>
    {#each buttons as button}
      <Button outline color='secondary' active={activeBtn === button.id} on:click={() => handleClick(button)}>{button.label}</Button>
    {/each}
  </ButtonGroup>
</div>

<style>

</style>