import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Header  />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Clock />
    </div>
  );
}

export default App;
