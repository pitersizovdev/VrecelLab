
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.css';

import Header from './components/header/Header';
import {Home,News,Exch,Profile} from './components/pages/pagesList.js';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header />

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/home' element={<Home />}/>
  <Route path='/news' element={<News />}/>
  <Route path='/exch' element={<Exch />}/>
  <Route path='/profile' element={<Profile />}/>
</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
