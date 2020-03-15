import React from 'react';

import Filter from '../../components/Filter';
import CharacterList from '../../components/CharacterList';

function Main() {
  return (
    <section>
      <Filter />
      <CharacterList />
    </section>
  );
}

export { Main };