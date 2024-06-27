import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Pricing from './Pricing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Pricing />
  </React.StrictMode>
);
