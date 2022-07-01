<script>
  export let id = '?';
  export let name = '?';
</script>

<!-- pokemon card -->
<div class="pokemon">
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    alt={name}
    class="pokemon__image"
    loading="lazy"
  />
  <h3 class="pokemon__title"><span>{id}.</span>{name}</h3>
  <a href="/[id]" class="pokemon__button">Ver más</a>
</div>
