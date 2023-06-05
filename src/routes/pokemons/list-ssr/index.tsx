import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <>Hello Qwik SSR!</>
});

export const head: DocumentHead= {
  title: 'List - Ssr',
};
