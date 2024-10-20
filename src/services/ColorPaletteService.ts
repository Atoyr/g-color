import type { ColorPalette } from "../types/ColorPalette";
import type { IColorPaletteRepository } from "../repositories/IColorPaletteRepository";
import type { Tag } from "../types/Tag";

export class ColorPaletteService {
  constructor(private colorPaletteRepository: IColorPaletteRepository) {}

  async get(): Promise<ColorPalette[]> {
    return this.colorPaletteRepository.get();
  }
  async getById(id: number): Promise<ColorPalette> {
    return this.colorPaletteRepository.getById(id);
  }

  async getTags(): Promise<Tag[]> {
    return this.colorPaletteRepository.getTags();
  }
}
