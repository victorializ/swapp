import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import { CharacterProvider } from './context/CharacterContext'; 
import { FilterProvider } from './context/FilterContext';

import './assets/common.scss';

function App() {
  return (
    <>
      <header>
        Star Wars
      </header>
      <section>
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
      </section>
      <footer>
        <q>may the force be with you</q>
      </footer>
    </>
  );
}

export default App;
