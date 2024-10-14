import { useEffect, useState } from 'react';
import './index.css';

/*
Krok 1: V tomto úkolu použijeme Harry Potter API: https://hp-api.onrender.com. Dobře si prohlédněte,
  co vrací endpoint https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225
Krok 2: Vytvořte v této komponentě efekt, který se spustí při prvním zobrazení komponenty. V tomto
  efektu vytvořte funkci `fetchCharacter`, která pomocí funkce `fetch` stáhne postavu z výše
  uvedeného endpointu. Objekt s postavou uložte do stavu `postava`.
Krok 3: Pokud je stav `character` `null`, nechte zobrazen text `Načítám…`. Pokud je stav `character`
  jiný, zobrazte jméno postavy, herce, který postavu hraje a její fotografii.
*/

export const Ukol5 = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        'https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225',
      );
      const characters = await response.json();
      setCharacter(characters[0]);
    };
    fetchCharacter();
  }, []);

  if (!character) {
    return <p>Načítám…</p>;
  } else {
    return (
      <div className='character'>
        <h1 className='character__name'>{character.name}</h1>
        <p className='character__actor'>{character.actor}</p>
        <img className='character__image' src={character.image} alt={character.name}></img>
      </div>
    );
  }
};
