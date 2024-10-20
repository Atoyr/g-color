<script lang="ts">
  import Tag from './Tag.svelte';
  import type { Tag as TagType } from '../types/Tag';
  import { CopyRegular } from 'svelte-awesome-icons';
  export let baseColor: string = "#7F7F7F";
  export let title: string = "";
  export let tags: TagType[] = [];

  let copyStatus: HTMLElement | null = null;

  function handleCopyButtonClick(_: MouseEvent) {
    // クリップボードにテキストをコピーする
    navigator.clipboard.writeText(baseColor).then(function() {
      if(copyStatus)
      {
        copyStatus.style.display = 'inline'; // コピー成功メッセージを表示

        // 3秒後にメッセージを非表示
        setTimeout(function() {
          copyStatus!.style.display = 'none';
        }, 3000);
      }
    }).catch(function(err) {
      console.error('Failed to copy text: ', err);
    });
  }

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
    height: 18px;
  }
  
  .copy-button {
    display: flex;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    height: 18px;
    align-items: center;
  }
  .copy-button:focus {
    outline: none;
  }
  .copy-button:active {
    outline: none;
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

  .copy-status {
    color: green;
    font-weight: bold;
    display: none;
    font-size: 12px;
  }
</style>

<div class="flex-row">
  <div class="color-squares" style="--base-color: {baseColor}"></div>
  <div class="flex-column">
    <div class="top-title">{title}</div>
    <div class="flex-row">
      <div class="top-subtitle">{baseColor}</div>
      <button class="copy-button" on:click={handleCopyButtonClick}><CopyRegular size="14" color="#7F7F7F"/></button>
      <span class="copy-status" bind:this={copyStatus}>Copied!</span>
    </div>
    <div class="flex-row tag-items">
      {#each tags as tag}
        <Tag name={tag.name} />
      {/each}
    </div>
  </div>
</div>

