import { createClient } from "@supabase/supabase-js";

import type { IColorPaletteRepository } from './IColorPaletteRepository';
import type { ColorPalette } from '../types/ColorPalette';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export class SupabaseColorPaletteRepository implements IColorPaletteRepository {
  constructor() {}
  async get(): Promise<ColorPalette[]> {
    const { data, error } = await supabase.from('color_palette')
                                          .select(`id, title, hex, detail, tags(id, name, category)`);
    if (error) {
      throw error;
    }

    return data.map<ColorPalette>(d =>  {
      return { 
        id: d.id, 
        title: d.title, 
        hex: d.hex, 
        detail: d.detail, 
        Tags: d.tags.map(t => {return {id: t.id, name: t.name, category: t.category}})}
    });
  }
  async getById(id: number): Promise<ColorPalette> {
    const { data, error } = await supabase.from('color_palette').select('*').eq('id', id);
    if (error) {
      throw error;
    }
    return data[0];
  }
}
