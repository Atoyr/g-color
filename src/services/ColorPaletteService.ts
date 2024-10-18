import type { ColorPalette } from "../types/ColorPalette";
import type { IColorPaletteRepository } from "../repositories/IColorPaletteRepository";

export class ColorPaletteService {
  constructor(private colorPaletteRepository: IColorPaletteRepository) {}

  async get(): Promise<ColorPalette[]> {
    return this.colorPaletteRepository.get();
  }
  async getById(id: number): Promise<ColorPalette> {
    return this.colorPaletteRepository.getById(id);
  }
}
