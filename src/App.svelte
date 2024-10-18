<script lang="ts">
import ColorInfo from './components/ColorInfo.svelte';
    import ColorInfoCard from './components/ColorInfoCard.svelte';
import { SupabaseColorPaletteRepository } from './repositories/SupabaseCololrPaletteRepository';
import { ColorPaletteService } from './services/ColorPaletteService';
import type { ColorPalette } from './types/ColorPalette';

const service = new ColorPaletteService(new SupabaseColorPaletteRepository());
let colorPalettes: ColorPalette[] = [];
service.get().then(x => colorPalettes = x);

</script>

<main>
  {#each colorPalettes as item}
      <div>
        <ColorInfo baseColor={item.hex} title={item.title} info={item.detail}/>
      </div>
  {/each}
  
  <div>
    <ColorInfo baseColor="#ef7e20" title="デスティニーオレンジ" info=""/>
  </div>
  <div>
    <ColorInfo baseColor="#00489a" />
  </div>
</main>


<style>
  main {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 30px;
  }
</style>
