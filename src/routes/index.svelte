<script>
  import PokeList from '../components/pokemons-list.svelte';
  import { getPokemons } from './../services/pokemons.js';

  let page = 0;
  let pokemonsFetch = getPokemons(page);
</script>

<header>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <a href="/" class="navbar__link">Inicio</a>
      </li>
      <li class="navbar__item">
        <a href="/" class="navbar__link">Pokemons</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  <!-- hero -->
  <section class="hero">
    <h1 class="hero__title">Pokedex</h1>
    <p class="hero__text">
      Esto es una prueba hecha en SvelteKit consumiendo la
      <a href="https://pokeapi.com" class="hero__link">PokeAPI</a>
    </p>
    <a href="#pokemons" class="heto__button">Ver Pokemons</a>
  </section>

  <!-- pokemons -->
  <section class="pokemons">
    {#await pokemonsFetch}
      <h3>cargando..</h3>
    {:then pokemons}
      <PokeList {pokemons} />
    {/await}
    <div>
      <button on:click={() => (pokemonsFetch = getPokemons(--page))}> Pagina Anterior </button>
      <span>{page}</span>
      <button on:click={() => (pokemonsFetch = getPokemons(++page))}> Siguiente Pagina </button>
    </div>
  </section>
</main>

<style>
  /* nav */
  .navbar__list {
    display: flex;
    gap: 2em;
  }

  /* hero */
</style>
