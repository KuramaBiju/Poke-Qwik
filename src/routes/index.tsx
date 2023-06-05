/* eslint-disable qwik/jsx-img */
import { $, component$, useSignal } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';


export default component$(() => {

  const pokemonId = useSignal(1);
  const showBackImage = useSignal(false);
  const revealPokemon = useSignal(true);

  const nav = useNavigate();


  const changePokemonId = $(
    (value:number) => {
       if((pokemonId.value + value) <= 0 ) return;
       if((pokemonId.value + value) > 898 ) return;
       pokemonId.value += value;
  
     }
  );

  const changeBackImage = $(
    () => {
      showBackImage.value = !showBackImage.value;
    }
  );

  const changeRevealPokemon = $(
    () => {
      revealPokemon.value = !revealPokemon.value;
    }
  );

  const goToPokemon =  $(
    async() => {
      await nav(`/pokemon/${pokemonId.value}`)
    }
  );




  return (

    
    <>
     
     <span class="text-2xl">Buscador simple</span>
     <span class="text-9xl">{pokemonId}</span>
     <div onClick$={() => goToPokemon()}>
      <PokemonImage id={pokemonId.value} size={100} backImage={showBackImage.value} revealPokemon={revealPokemon.value} />
     </div>

     <div class="mt-2">

       <button onClick$={ () => changePokemonId(-1)} class="btn btn-primary mr-2">Anterior</button>
       <button onClick$={ () => changePokemonId(1)} class="btn btn-primary mr-2">Siguiente</button>
       <button onClick$={ () => changeBackImage()} class="btn btn-primary mr-2">Voltear</button>
       <button onClick$={ () => changeRevealPokemon()} class="btn btn-primary">Revelar</button>

      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'First Qwik App',
    },
  ],
};
