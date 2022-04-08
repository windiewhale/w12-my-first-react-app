import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import Header from './components/Header'
import data from './data'

/* console.log(data.cards); */
/* console.log(<Beers list={data.cards} />); */

//reactDOM felel azért hogy html kóddá renderelje a js objektumot ami a jsx ből érkezett
ReactDOM.render(
  <React.StrictMode>
    <Header logo={data.logo} />
    <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);

