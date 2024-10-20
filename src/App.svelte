<script lang="ts">
  import ColorInfo from './components/ColorInfo.svelte';
  import { SupabaseColorPaletteRepository } from './repositories/SupabaseCololrPaletteRepository';
  import { ColorPaletteService } from './services/ColorPaletteService';
  import type { ColorPalette } from './types/ColorPalette';
  import type { Tag } from './types/Tag';

  const service = new ColorPaletteService(new SupabaseColorPaletteRepository());
  let colorPalettes: ColorPalette[] = [];
  let tags: Tag[] = [];
  service.get().then(x => colorPalettes = x);
  service.getTags().then(x => tags = x);

  let searchQuery: string = '';
  let confirmedSearchQuery: string = ''; 
  let selectedTag: string = '';

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      confirmedSearchQuery = searchQuery;
    }
  }

  function handleBlur() {
    confirmedSearchQuery = searchQuery;
  }

  // Function to filter color palettes based on search query and selected tag
  $: filterPalettes = colorPalettes.filter(palette => {
      const matchesTitle = palette.title.toLowerCase().includes(confirmedSearchQuery.toLowerCase());
      const matchesTag = selectedTag ? palette.tags.map(x => x.name).includes(selectedTag) : true;
      return matchesTitle && matchesTag;
    });
  
</script>

<style>
  main {
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 20px;
    text-align: center;
    min-width: 1080px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:16px;
  }
  
  .search-box {
    display: flex;
    align-items: center;
    width: 75%;
    height: 48px;
    border-radius: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(236, 236, 236, 0.47);
    padding-left: 16px;
    padding-right: 16px;
    background-color: #f5f5f5;
  }
  .search-box:hover {
    background-color: transparent;
  }
  .search-box:focus-within{
    background-color: transparent;
  }
  .search-box input{
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 1;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .select-box select{
    padding: 6px;
    font-size: 14px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    appearance: none; /* Remove default arrow */
    -webkit-appearance: none; /* For Safari */
  }
  .select-box select:focus {
    outline: none;
    border-color: #888;
  }

  
  h1 {
    margin-bottom: 30px;
  }
</style>

<main>
  <div class="header">
    <div class="search-box">
      <input 
        type="text" 
        placeholder="タイトルで検索" 
        bind:value={searchQuery} 
        on:keydown={handleKeydown}
        on:blur={handleBlur}
        />
    </div>
    <div class="select-box">
      <select bind:value={selectedTag}>
        <option value="">すべてのタグ</option>
        {#each tags as tag}
          <option value={tag.name}>{tag.name}</option>
        {/each}
      </select>
    </div>


  </div>
  <!-- Search input for title -->

  <!-- Dropdown for selecting tag -->
  
  {#each filterPalettes as item}
      <div>
        <ColorInfo baseColor={item.hex} title={item.title} info={item.detail} tags={item.tags}/>
      </div>
  {/each}
</main>


