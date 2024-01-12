import React from 'react';
import { createRoot } from 'react-dom/client';import './index.css';
import App from './App';

// Rander in Menu
const menu = createRoot(document.getElementById('menu')!)
menu.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render in root
const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);