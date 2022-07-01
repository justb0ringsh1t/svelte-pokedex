<script>
  import { getPokemons } from './../services/pokemons.js';

  let page = 0;
  let pokemonsFetch = getPokemons(page);

  const nextPage = () => {
    pokemonsFetch = getPokemons(++page);
  };
  const previousPage = () => {
    if (page === 0) return;
    pokemonsFetch = getPokemons(--page);
  };
</script>

<!-- navbar -->
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

<!-- main -->
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

  <!-- pokemons list -->
  <section class="pokemons">
    <ul class="pokemons__list">
      {#await pokemonsFetch}
        <h3>cargando..</h3>
      {:then pokemonsList}
        {#each pokemonsList as { id, name }}
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
        {/each}
      {/await}
    </ul>
    <button on:click={previousPage}> Pagina Anterior </button>
    <p>{page}</p>
    <button on:click={nextPage}> Siguiente Pagina </button>
  </section>
</main>

<style>
  /* nav */
  .navbar__list {
    display: flex;
    gap: 2em;
  }

  /* hero */

  /* pokemons list */
  .pokemons__list {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 2em;
  }
</style>
