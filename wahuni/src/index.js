import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './card.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card name={"Benson Eusebio Sanga"}/>
  </React.StrictMode>
);

reportWebVitals();
