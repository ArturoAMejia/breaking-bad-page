import React, { useEffect, useState } from "react";
import { Card } from "../components/characters/Card";
import { ICharacter } from "../interfaces/characters";

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacter[] | undefined>();

  useEffect(() => {
    const getCharacters = async () => {
      const req = await fetch(
        "https://www.breakingbadapi.com/api/characters?limit=20"
      );
      const res = await req.json();
      setCharacters(res);
    };
    getCharacters();
  }, []);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sx:grid-cols-1 gap-2 m-auto p-4 justify-items-center">
      <Card characters={characters} />
    </div>
  );
};

export default Characters;
