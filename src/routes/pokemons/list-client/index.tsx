import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  
    return (
          <>Hello World Client!</>
    );
});

export const head: DocumentHead= {
    title: 'List - Client',
  };
  