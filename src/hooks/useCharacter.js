import { useContext } from 'react';

import { useRequest } from '../hooks';
import { CharacterContext } from '../context/CharacterContext';

const useCharacter = () => {
  const [ data, loading, error ] = useContext(CharacterContext);
  return [ data, loading, error ];
}

const useCharacterRequest = inititalData => {
  const [ data, loading, error ] = useRequest('people', inititalData);
  return [ data, loading, error ];
}

export { useCharacter, useCharacterRequest };