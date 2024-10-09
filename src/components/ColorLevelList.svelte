<script lang="ts">

  import { lightLevelColor } from '../utils/color';
  // 基本色とオーバーレイ色を定義
  export let baseColor: string = '#7F7F7F';
  
  // 透明度の配列を生成
  const lightLevels: {level: number, name: string} [] = [
    { level: -95, name: 'D-95' },
    { level: -90, name: 'D-90' },
    { level: -80, name: 'D-80' },
    { level: -70, name: 'D-70' },
    { level: -60, name: 'D-60' },
    { level: -50, name: 'D-50' },
    { level: -40, name: 'D-40' },
    { level: -30, name: 'D-30' },
    { level: -20, name: 'D-20' },
    { level: -10, name: 'D-10' },
    { level: 0, name: '0' },
    { level: 10, name: 'L-10' },
    { level: 20, name: 'L-20' },
    { level: 30, name: 'L-30' },
    { level: 40, name: 'L-40' },
    { level: 50, name: 'L-50' },
    { level: 60, name: 'L-60' },
    { level: 70, name: 'L-70' },
    { level: 80, name: 'L-80' },
    { level: 90, name: 'L-90' },
    { level: 95, name: 'L-95' },
  ];
</script>

<style>
  .color-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
    justify-content: center;
  }

  .color-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  
  .color-panel {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--base-color);
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    overflow: hidden;
  }

  .color-text {
    width: 50px;
    height: 24px;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }

</style>

<div class="color-container">
  {#each lightLevels as lightLevel}
    <div
      class="color-box">
      <div
        class="color-panel"
        style="
          --base-color: {lightLevelColor(baseColor, lightLevel.level)};
        "
      >
      </div>
      <div
      class="color-text">
        {lightLevel.name}
      </div>
    </div>
  {/each}
</div>

