import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Ruta correcta para el CSS de index
import App from './App'; // Asegúrate de que 'App.js' tenga la exportación correcta
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
