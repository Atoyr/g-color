<script>
import ColorInfo from './components/ColorInfo.svelte';
</script>

<main>
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
