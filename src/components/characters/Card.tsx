import { FC } from "react";
import { ICharacter } from "../../interfaces/characters";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters?: ICharacter[];
}

export const Card:FC<Props> = ({ characters }) => {
  return (
    <>
      {characters?.map((character) => (
        <CharacterCard character={character} key={character.char_id} />
      ))}
    </>
  );
};
