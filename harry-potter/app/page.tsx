"use client";
import React from 'react';
import CharacterCard from './components/CharacterCard';
import { CharacterCard as CharacterCardType } from './models/character';

const Home: React.FC = () => {
  const characterCard: CharacterCardType = {
    //replace placeholders/
    name: "",
    dateOfBirth: "",
  };

  return (
    <div>
      <CharacterCard characterCard={[characterCard]} />
    </div>
  );
};

export default Home;