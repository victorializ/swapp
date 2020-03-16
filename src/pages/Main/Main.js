import React from 'react';

import Filter from '../../components/Filter';
import CharacterList from '../../components/CharacterList';

function Main() {
  return (
    <div className="main">
      <Filter />
      <CharacterList />
    </div>
  );
}

export { Main };