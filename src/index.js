import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactIndex from './Component/ContactIndex';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactIndex/>
  </React.StrictMode>
);

