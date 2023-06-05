import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
  id: number | string;
  size?: number;
  backImage?: boolean;
  revealPokemon?: boolean;
}
const generateUrlImage = (id: number | string, backImage: boolean) => {
  
  let baseUrl= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  if(backImage) {
    baseUrl += `back/${id}.png`
  }else{
    baseUrl += `${id}.png`
  }
  return baseUrl;

  
  
}
export const PokemonImage = component$(({id,size=200,backImage= false,revealPokemon=true} : Props) => {
  const imageLoaded = useSignal(false);
  useTask$(({track}) => {
    track(() => id)
    imageLoaded.value = false;
  });
  return (
    <div class="flex items-center justify-center"
    style={{
      width: `${size}px`
    }}
    >
      {
        !imageLoaded.value && (
          <span>Cargando...</span>
        )
      }
      <img 
        src={generateUrlImage(id,backImage)}
         alt="Pokemon Sprite"
         style={{
           width: `${size}px`
         }} 
         class={[{
          'hidden' : !imageLoaded.value,
          'brightness-0' :!revealPokemon 
        },'transition-all']}
         onLoad$={() => {
         
            imageLoaded.value = true;
      
         }}
         />
    </div>
  )
});