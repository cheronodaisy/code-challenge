import React from "react";
import { Details } from "../models/character"

interface CharacterSectionProps {
    details: Details[]; 
}

const CharacterSection: React.FC<CharacterSectionProps> = ( { details }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap 4">
            {details.map((character) => {
            return (
              <details
                id={character.id}
                name={character.name}
                DOB={character.dateOfBirth}
                key={character.id}
                imageSrc={character.image}
                hasHouse={character.house}
                />
            )
        })}
        </div>
    )
};

export default CharacterSection;