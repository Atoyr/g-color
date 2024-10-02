<script lang="ts">

  // 基本色とオーバーレイ色を定義
  export let baseColor: string = '#7F7F7F';
  const black: string = '#000000';
  const white: string = '#FFFFFF';
  
  // 透明度の刻み幅
  const step: number = 10;
  
  // 透明度の配列を生成（10%から100%）
  const opacities: number[] = Array.from({ length: 9 }, (_, i) => (i + 1) * step).reverse();
  
  // 関数：カラーコードをRGBに変換
  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    // 6桁のカラーコードに対応
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  // 関数：RGBとアルファ値からRGBAカラーを生成
  function rgbaColor(hex: string, alpha: number): string {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
</script>

<style>
  .color-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
  }
  
  .color-box {
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
  
  .color-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    opacity: var(--overlay-opacity);
    transition: opacity 0.3s ease;
  }
</style>

<div class="color-container">
  {#each opacities as opacity}
    <div
      class="color-box"
      style="
        --base-color: {baseColor};
        --overlay-color: {black};
        --overlay-opacity: {opacity / 100};
      "
    >
      {opacity}%
    </div>
  {/each}
    <div
      class="color-box"
      style="
        --base-color: {baseColor};
        --overlay-color: {white};
        --overlay-opacity: 0
      "
    >
    </div>
  {#each opacities.reverse() as opacity}
    <div
      class="color-box"
      style="
        --base-color: {baseColor};
        --overlay-color: {white};
        --overlay-opacity: {opacity / 100};
      "
    >
      {opacity}%
    </div>
  {/each}
</div>

