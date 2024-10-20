import type { Tag } from './Tag';

export type ColorPalette = {
  id: string;
  title: string;
  hex: string;
  detail: string;
  tags: Tag[];
}
