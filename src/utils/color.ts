export let baseColor: string = '#7F7F7F';
const black: string = '#000000';
const white: string = '#FFFFFF';

// 関数: カラーコードをRGBに変換
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // 6桁のHEXカラーコードに対応
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return match
    ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16),
      }
    : null;
}

// 関数: カラーコードをRGBに変換
export function hexToRgba(hex: string): string | null {
  const rgb = hexToRgb(hex);
  if (rgb === null) {
    return null;
  }
  return rgbaColor(hex, 1);
}

// 関数: RGBをカラーコードに変換
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

// 関数: カラーコードを指定の透明度でオーバーレイ
export function overlayColor(
  baseColor: string,
  overlayColor: string,
  opacity: number
): string | null {
  const baseRgb = hexToRgb(baseColor);
  const overlayRgb = hexToRgb(overlayColor);
  
  if (!baseRgb || !overlayRgb) {
    return null; // 無効なカラーコードの場合はnullを返す
  }

  const alpha = opacity / 100; // 透明度を0〜1に正規化

  const r = Math.round(overlayRgb.r * alpha + baseRgb.r * (1 - alpha));
  const g = Math.round(overlayRgb.g * alpha + baseRgb.g * (1 - alpha));
  const b = Math.round(overlayRgb.b * alpha + baseRgb.b * (1 - alpha));

  return rgbToHex(r, g, b);
}

// 関数: 光源レベルに応じたカラーを生成
// 光源レベルは-100〜100の範囲で指定
export function lightLevelColor(
  baseColor: string,
  lightLevel: number
): string | null {
  if (lightLevel < -100 || lightLevel > 100) {
    return null;
  }
  const overlay = lightLevel < 0 ? black : white;
  return overlayColor(baseColor, overlay, Math.abs(lightLevel));
}

// 関数: HEXから相対輝度を計算
export function relativeLuminanceWithHex(color: string): number {
  const rgb = hexToRgb(color);
  if (rgb === null) {
    return 0;
  }
  return relativeLuminance(rgb);
}

// 関数: RGBから相対輝度を計算
export function relativeLuminance(rgb: { r: number; g: number; b: number }): number {
  const srgb = [rgb.r, rgb.g, rgb.b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

// 関数: コントラスト比を計算
export function contrastRatio(color1: string, color2: string | null = null): number | null {
  const rgb1 = hexToRgb(color1);
  if (rgb1 === null) {
    return null;
  }
  const lum1 = relativeLuminance(rgb1);

  let c2 = color2;
  if (c2 === null) {
    c2 = lum1 > 0.5 ? black : white;
  }
  const lum2 = relativeLuminanceWithHex(c2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return ((brightest + 0.05) / (darkest + 0.05));
}


// 関数：RGBとアルファ値からRGBAカラーを生成
export function rgbaColor(hex: string, alpha: number): string | null {
  const rgb = hexToRgb(hex);
  if (rgb === null) {
    return null;
  }
  const { r, g, b } = rgb!;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
