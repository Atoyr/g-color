<script lang="ts">
  // 基本色とオーバーレイ色を定義
  export let baseColor: string = '#7F7F7F';
  import { contrastRatio } from '../utils/color';
  import { IconX, IconCheck} from '@tabler/icons-svelte';

  const contrast = contrastRatio(baseColor) || 0;
  const isAANormalText = contrast >= 4.5;
  const isAAANormalText = contrast >= 7;
  const isAALargeText = contrast >= 3;
  const isAAALargeText = contrast >= 4.5;
</script>

<style>
  .color-info-card {
    width: 420px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    margin: 16px;
    border-radius: 16px;
    background-color: transparent;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-grow-1 div {
    flex-grow: 1;
  }

  .top-panel {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: var(--base-color);
    padding: 16px;
  }

  .bottom-panel {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: var(--base-color);
    padding: 16px;
  }

  .option {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
  }

  .option:last-child {
    margin-bottom: 0;
  }

  .color-code {
    display: flex;
    font-size: 24px;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
  .large-text {
    display: flex;
    font-size: 24px;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
  .small-text {
    display: flex;
    font-size: 14px;
    height: 48px;
    align-items: center;
    justify-content: center;
  }
  .ui-component {
    align-items: center;
    justify-content: center;
    display: flex;

    font-size: 14px;
    font-weight: 600;
    
    width: 160px;
    height: 48px;
    border-radius: 24px;

    background-color: #FFFFFF;
  }
  
  .content-title {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: #7F7F7F;
  }
  .contrast-ratio {
    font-size: 72px;
    font-weight: 600;
    height: 96px;
  }

  .icon {
      width: 24px;
      height: 24px;
      background-color: white;
      border-radius: 12px;
  }
</style>

<div class="color-info-card flex-column"
>
  <div class="top-panel flex-column"
    style="
      --base-color: {baseColor};
    "
  >
    <div class="option">
      <div class="icon">
        {#if isAANormalText} 
          <IconCheck size={24} color={baseColor}/>
        {:else}
          <IconX size={24} color={baseColor}/> 
        {/if}
      </div>
      <div class="large-text">大きな文字 Large Text</div>
    </div>
    <div class="option">
      <div class="icon">
        {#if isAALargeText} 
          <IconCheck size={24} color={baseColor}/>
        {:else}
          <IconX size={24} color={baseColor}/> 
        {/if}
      </div>
      <div class="small-text">小さな文字 Small Text</div>
    </div>
    <div class="option">
      <div class="icon">
        {#if isAALargeText} 
          <IconCheck size={24} color={baseColor}/>
        {:else}
          <IconX size={24} color={baseColor}/> 
        {/if}
      </div>
      <div class="ui-component">UIコンポーネント</div>
    </div>
  </div>
  <div class="bottom-panel flex-row flex-grow-1"
    style="
      --base-color: #FFFFFF;
    "
  >
    <div class="flex-column">
      <div class="content-title">コントラスト</div>
      <div class="contrast-ratio">{contrast.toFixed(2)}</div>
    </div>
    <div class="flex-column">
      <div class="content-title">カラーコード</div>
      <div class="color-code">{baseColor.toUpperCase()}</div>
    </div>
  </div>
</div>

