<script lang="ts">
  import ColorInfoCard from './ColorInfoCard.svelte';
  import ColorLevelList from './ColorLevelList.svelte';

  export let baseColor: string = "#7F7F7F";
  export let title: string = "";
</script>

<style>
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .top-panel {
    display: flex;
    flex-direction: column;
    gap: 16px; 
  }

  .top-title {
    text-align: left;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    height: 32px;
    margin: 16px;
  }

  .top-subtitle {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: #7F7F7F;
    margin-left: 16px;
  }

  .color-squares {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 25%;
    width: 100px;
    height: 100px;
    background-color: var(--base-color);
  }
</style>

<div class="top-panel">
  <div class="flex-row">
    <div class="color-squares" style="--base-color: {baseColor}"></div>
    <div class="flex-column">
      <div class="top-title">{title}</div>
      <div class="top-subtitle">{baseColor}</div>
    </div>
  </div>
  <ColorInfoCard baseColor={baseColor} />
  <ColorLevelList baseColor={baseColor} />
</div>


