import type { ColorPalette } from "../types/ColorPalette";
import type { Tag } from "../types/Tag";

export interface IColorPaletteRepository {
  get(): Promise<ColorPalette[]>;
  getById(id: number): Promise<ColorPalette>;
  getTags(): Promise<Tag[]>;
  getTagsByCategory(category: string): Promise<Tag[]>;
  getTagsById(id: number): Promise<Tag>;
}
