<script lang="ts">
  import ColorOverlay from './components/ColorOverlay.svelte';
</script>

<main>
  <h1>カラーオーバーレイの例</h1>
  <ColorOverlay baseColor="#ef7e20"/>
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
