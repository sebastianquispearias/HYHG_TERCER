import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    setUploading(true);
    setUploadSuccess(false);
    setUploadError('');
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    axios.post('http://localhost:3001/upload', formData)
      .then(response => {
        setFile(acceptedFiles[0]);
        setUploadSuccess(true);
      })
      .catch(error => {
        setUploadError('Error al cargar el archivo: ' + error.message);
      })
      .finally(() => {
        setUploading(false);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'application/pdf',
  });

  return (
    <div className="file-upload-wrapper">
      <div className="file-upload-container" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta tu archivo aquí, o <span className="file-select">selecciona un archivo</span></p>
        {isDragActive && <p>Suelta el archivo aquí...</p>}
        <button className="upload-button" disabled={uploading}>
          {uploading ? 'Cargando...' : 'Subir archivo PDF'}
        </button>
        {uploadSuccess && <div className="success-message">Archivo cargado con éxito: {file.name}</div>}
        {uploadError && <div className="error-message">{uploadError}</div>}
      </div>
    </div>
  );
};

export default FileUpload;
