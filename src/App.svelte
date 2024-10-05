<script>
import ColorInfoCard from './components/ColorInfoCard.svelte';
import ColorLevelList from './components/ColorLevelList.svelte';
</script>

<main>
  <div>
    <ColorInfoCard baseColor="#ef7e20" />
    <ColorLevelList baseColor="#ef7e20" />
  </div>
  <div>
    <ColorInfoCard baseColor="#00489a" />
    <ColorLevelList baseColor="#00489a" />
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
