import { useContext } from 'react';

import { useRequest } from '../hooks';
import { getCharacters } from '../services/http-client';
import { CharacterContext } from '../context/CharacterContext';

const useCharacter = () => {
  const [ data, loading, error ] = useContext(CharacterContext);
  return [ data, loading, error ];
}

const useCharacterRequest = inititalData => {
  const [ data, loading, error ] = useRequest('people', inititalData, getCharacters);
  return [ data, loading, error ];
}

export { useCharacter, useCharacterRequest };