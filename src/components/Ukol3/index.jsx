import { useEffect } from "react";



/*
Zadání: Vytvořte v této komponentě efekt, který pomocí funkce `setTimeout` po 3 vteřinách
  od prvního zobrazení komponenty v konzoli vypíše text „Jsem tady“.
*/

export const Ukol3 = () => {
  useEffect(() => {
    console.log('Jsem tady.');
  });
  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
