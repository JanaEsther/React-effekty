import { useEffect } from 'react';
import { useState } from 'react';
/*
Zadání: Upravte efekt v této komponentě tak, aby se při KAŽDÉM vykreslení komponenty v konzoli objevil
  text „Jsem tady“.

Poznámka: Nemáte jak prakticky ověřit, že se to zobrazí při každém vykreslení – protože React nemá
  žádný důvod vykreslovat komponentu opakovaně. Důležité je vyzkoušet si ten zápis useEffectu pouze
  s jedním parametrem.
*/

export const Ukol1 = () => {
  const [text, setText] = useState('');

  const message = 'Jsem tady.';

  useEffect(() => {
    console.log('Jsem tady.');
  });

  return (
    <>
      <p>{message}</p>
    </>
  );
};
