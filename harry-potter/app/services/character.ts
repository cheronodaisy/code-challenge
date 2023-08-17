import { CharacterCard, CharacterSection } from '../models/character';

const baseUrl = 'https://hp-api.onrender.com/api/characters';

const fetchCharacterData = async (name: string) : Promise<{character: CharacterCard, details: CharacterSection}> =>{

    const characterResponse = await fetch(`${baseUrl}/character?q=${name}`);
    const characterData = await characterResponse.json();

    if (characterData.cod !== 200) {
        throw new Error(characterData.message);
    }

    const detailsCharacterSection = await fetch(`${baseUrl}/character?q=${name}`);
    const detailsData = await detailsCharacterSection.json();

    if (detailsData.cod !== 200) {
        throw new Error(characterData.message);
    }

    const character: CharacterCard = {
        name: characterData.name,
        dateOfBirth: characterData.dateOfBirth,
    }

    const details: CharacterSection = {
        name: detailsData.name,
        dateOfBirth: detailsData.dateOfBirth,
        id: detailsData.id,
        actor: detailsData.name,
        ancestry: detailsData.name,
        eyeColour: detailsData.colour,
        gender: detailsData.gender,
        hairColour: detailsData.colour,
        hogwartsStaff: detailsData.boolean,
        hogwartsStudent: detailsData.boolean,
        image: detailsData.image,
        species: detailsData.species,
        house: detailsData.house,
        patronus: detailsData.patronus,
        wizard: detailsData.wizard,
        wand: {
            wood: detailsData.wood,
            core: detailsData.core,
            length: detailsData.length,
        }
    }
    return {character, details}
}
export default fetchCharacterData;