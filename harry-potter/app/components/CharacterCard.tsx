import React from "react";
import { CharacterCard } from "../models/character";

interface CharacterCardProps {
    characterCard: CharacterCard;
}

const CharacterCard: React.FC<CharacterCardProps> = ( { characterCard} ) => {
    const { name, dateOfBirth } = characterCard;

    return (
        <div className="flex flex-col items-center p-8 mt-32 ">
            <h2 className="text-2x1 mb-2">
                {name}, {dateOfBirth}
            </h2>
        </div>
    );
};

export default CharacterCard;