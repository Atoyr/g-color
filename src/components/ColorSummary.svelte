<script lang="ts">
  import Tag from './Tag.svelte';
  import type { Tag as TagType } from '../types/Tag';
  export let baseColor: string = "#7F7F7F";
  export let title: string = "";
  export let tags: TagType[] = [];

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

  .tag-items {
    gap: 8px;
    align-items: start;
    margin-left: 16px;
    margin-right: 16px;
  }
</style>

<div class="flex-row">
  <div class="color-squares" style="--base-color: {baseColor}"></div>
  <div class="flex-column">
    <div class="top-title">{title}</div>
    <div class="top-subtitle">{baseColor}</div>
    <div class="flex-row tag-items">
      {#each tags as tag}
        <Tag name={tag.name} />
      {/each}
    </div>
  </div>
</div>

