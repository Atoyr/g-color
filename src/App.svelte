<script>
import ColorInfoCard from './components/ColorInfoCard.svelte';
import ColorLevelList from './components/ColorLevelList.svelte';
</script>

<main>
  <h1>カラーオーバーレイの例</h1>
  <ColorInfoCard baseColor="#ef7e20" />
  <ColorLevelList baseColor="#ef7e20" />
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
