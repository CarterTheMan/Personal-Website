import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home';

// Rander in Menu
const menu = createRoot(document.getElementById('menu')!)
menu.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

// Render in root
const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);