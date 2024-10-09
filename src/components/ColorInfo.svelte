<script lang="ts">
  import ColorInfoCard from './ColorInfoCard.svelte';
  import ColorLevelList from './ColorLevelList.svelte';

  export let baseColor: string = "#7F7F7F";
  export let title: string = "";
  export let info: string = "";
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
    width: 1080px;
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

  .info-panel {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 16px;
  }

  .info-title {
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: #7F7F7F;
  }

  .info-text {
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    overflow-wrap: break-word;
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
  <div class="flex-row">
    <ColorInfoCard baseColor={baseColor} />
    <div class="info-panel">
      <div class="info-title">Information</div>
      <div class="info-text">{info}</div>
    </div>
  </div>
  <ColorLevelList baseColor={baseColor} />
</div>


