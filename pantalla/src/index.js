import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Aquí puedes importar contextos globales, proveedores, etc.
// Por ejemplo, si estás usando Redux:
// import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envuelve tu App con cualquier proveedor/contexto global si es necesario */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un endpoint de analítica. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
