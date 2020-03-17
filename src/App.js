import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import { DataProvider } from './context/DataContext'; 
import { FilterProvider } from './context/FilterContext';

import './assets/common.scss';

function App() {
  return (
    <>
      <header>
        SWAPP
      </header>
      <section>
        <DataProvider>
          <FilterProvider>
              <Router>
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/character/:name' component={Details} />
                </Switch>
              </Router>
          </FilterProvider>
        </DataProvider>
      </section>
      <footer>
        <q>may the force be with you</q>
      </footer>
    </>
  );
}

export default App;
