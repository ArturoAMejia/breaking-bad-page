import React, { FC } from "react";
import { ICharacter } from "../../interfaces/characters";
interface Props {
  character: ICharacter;
}

export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={character.img} alt="Shoes" />
      </figure>
      <div className="p-4 m-4">
        <h2 className="card-title">{character.name}</h2>
        <p className="p-1"><strong>Nickname: </strong>{character.nickname}</p>
        <p className="p-1"><strong>Birthday: </strong>{character.birthday}</p>
        <p className="p-1"><strong>Actor: </strong>{character.portrayed}</p>
      </div>
    </div>
  );
};
