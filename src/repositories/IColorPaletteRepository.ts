import type { ColorPalette } from "../types/ColorPalette";

export interface IColorPaletteRepository {
  get(): Promise<ColorPalette[]>;
  getById(id: number): Promise<ColorPalette>;
}
