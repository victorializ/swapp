import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import { CharacterProvider } from './context/CharacterContext'; 
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <>
      <header>
        Star Wars
      </header>
      <CharacterProvider>
        <FilterProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/character/:name' component={Details} />
            </Switch>
          </Router>
        </FilterProvider>
      </CharacterProvider>
      <footer>
        <q>may the force be with you</q>
      </footer>
    </>
  );
}

export default App;
