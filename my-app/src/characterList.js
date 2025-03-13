import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useTranslation } from 'react-i18next';
import './characterList.css';

// Define the GraphQL query to fetch characters
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { t } = useTranslation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Rick and Morty Characters</h2>
      <ul>
        {data.characters.results.map((character) => (
          <li key={character.id}>
            <strong>{character.name}</strong> - {character.status} ({character.species})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
