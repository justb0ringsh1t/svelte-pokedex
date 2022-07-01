<script>
  import PokemonCard from './pokemon-card.svelte';
  export let pokemons;
</script>

<!-- pokemons list -->
<ul class="pokemons__list">
  {#each pokemons as pokemon}
    <PokemonCard {...pokemon} />
  {/each}
</ul>

<style>
  /* pokemons list */
  .pokemons__list {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 2em;
  }
</style>
