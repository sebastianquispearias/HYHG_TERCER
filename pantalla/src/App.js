import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/img/logo_avicola.png" alt="Avícola Mugui" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Herramientas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Precios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Iniciar sesión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-container">
        <h1 className="main-title text-center">Paga en línea y consigue premios.</h1>
        <div className="file-upload-container">
          <label htmlFor="file-input" className="file-select">
            <input type="file" id="file-input" className="file-input" onChange={handleFileChange} />
            <img src="/img/custom-button.png" alt="Custom Button" className="custom-button-image" />
          </label>
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="file-upload-message mb-3">
              {file ? file.name : 'Arrastra y suelta el archivo PDF aquí'}
            </div>
            <button className="btn btn-primary btn-lg mt-3">Subir Archivo</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <span className="text-muted">© Avícola Mugui 2023 ® - Venta de aves beneficiadas.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
