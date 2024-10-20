import { createClient } from "@supabase/supabase-js";

import type { IColorPaletteRepository } from './IColorPaletteRepository';
import type { ColorPalette } from '../types/ColorPalette';
import type { Tag } from "../types/Tag";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

const convertTag = (data: {id: any, name: any, category: any}): Tag => {
  return {id: data.id, name: data.name, category: data.category} as Tag;
}

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
        tags: d.tags.map(t => {return convertTag(t)})}
    });
  }
  async getById(id: number): Promise<ColorPalette> {
    const { data, error } = await supabase.from('color_palette').select('*').eq('id', id);
    if (error) {
      throw error;
    }
    return data[0];
  }

  async getTags(): Promise<Tag[]> {
    const { data, error } = await supabase.from('tags').select(`id, name, category`);
    if (error) {
      throw error;
    }

    return data.map<Tag>(d =>  {
      return convertTag(d);
    });
  }
  async getTagsByCategory(category: string): Promise<Tag[]> {
    const { data, error } = await supabase.from('tags').select(`id, name, category`).eq('category', category);
    if (error) {
      throw error;
    }

    return data.map<Tag>(d =>  {
      return convertTag(d);
    });
  }
  async getTagsById(id: number): Promise<Tag>{
    const { data, error } = await supabase.from('tags').select(`id, name, category`).eq('id', id);
    if (error) {
      throw error;
    }

    return data[0];
  }
}
