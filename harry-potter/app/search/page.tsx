'use client';
import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import CharacterSection from "../components/CharacterSection";
import { CharacterCard as CharacterCardType, Details} from "../models/character";
import fetchCharacterData from "../services/character";

const SearchPage: React.FC = () => {
    
    const [details, setDetails] = useState<Details[] | null>(null);
    
    const handleSearch = async (name: string) => {
        try {
            const { details } = await fetchCharacterData(name);
            setDetails([details]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
        <SearchInput onSearch={handleSearch} /> 
        <CharacterSection />
        </div>
    );
};

export default SearchPage;