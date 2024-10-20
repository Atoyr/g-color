<script lang="ts">
  import ColorInfoCard from './ColorInfoCard.svelte';
  import ColorLevelList from './ColorLevelList.svelte';
  import ColorSummary from './ColorSummary.svelte';
  import type { Tag } from '../types/Tag';

  export let baseColor: string = "#7F7F7F";
  export let title: string = "";
  export let info: string = "";
  export let tags: Tag[] | undefined;
</script>

<style>
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .panel {
    display: flex;
    flex-direction: column;
    gap: 16px; 
    width: 1080px;
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

</style>

<div class="panel">
  <ColorSummary baseColor={baseColor} title={title} tags={tags}/>
  <div class="flex-row">
    <ColorInfoCard baseColor={baseColor} />
    <div class="info-panel">
      <div class="info-title">Information</div>
      <div class="info-text">{info}</div>
    </div>
  </div>
  <ColorLevelList baseColor={baseColor} />
</div>


