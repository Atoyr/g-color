<script lang="ts">
  // 基本色とオーバーレイ色を定義
  export let baseColor: string = '#7F7F7F';
  import { contrastRatio } from '../utils/color';
</script>

<style>
  .color-info-card {
    width: 250px;
    padding: 20px;
    background-color: var(--base-color);
    border-radius: 10px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .option {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
  }

  .option:last-child {
      margin-bottom: 0;
  }

  .option input[type="checkbox"] {
      margin-right: 10px;
  }

  .option input[type="radio"] {
      margin-right: 10px;
  }

  .large-text {
      font-size: 24px;
  }
  .small-text {
      font-size: 14px;
  }
</style>

<div class="color-info-card"
  style="
    --base-color: {baseColor};
  "
>
  <div class="option">
    <input type="checkbox" checked>
    <div class="large-text">大きな文字</div>
  </div>
  <div class="option">
    <input type="radio" name="text-size">
    <div class="small-text">小さな文字</div>
  </div>
  <div class="option">
    <div class="component">UIコンポーネント</div>
  </div>
  <div class="color-code">{baseColor.toUpperCase()}</div>
  <div class="rating">{contrastRatio(baseColor)?.toFixed(2)}</div>
</div>

