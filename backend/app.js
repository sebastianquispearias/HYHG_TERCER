const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const sharp = require('sharp'); // Puedes instalar esta biblioteca si necesitas procesar imágenes
const app = express();

// Configuración de multer para la subida de archivos
const storage = multer.memoryStorage(); // Almacenamos los archivos en memoria
const upload = multer({ storage: storage });

// Ruta para subir archivos
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo');
  }

  const fileExtension = req.file.originalname.split('.').pop().toLowerCase();

  if (fileExtension === 'pdf') {
    // Procesar el archivo PDF usando pdf-parse
    const dataBuffer = req.file.buffer; // Datos del archivo subido
    try {
      const pdfData = await pdf(dataBuffer);
      const text = pdfData.text;
      // Aquí puedes hacer lo que necesites con el texto extraído del PDF
      res.send('PDF procesado con éxito');
    } catch (error) {
      res.status(500).send('Error al procesar el archivo PDF');
    }
  } else if (fileExtension === 'jpg' || fileExtension === 'png') {
    // Procesar imágenes aquí si es necesario
    // Utiliza la biblioteca sharp o image-size según tus necesidades
    try {
      const processedImageBuffer = await sharp(req.file.buffer)
        .resize(200, 200) // Ejemplo: redimensionar la imagen
        .toBuffer();
      // Aquí puedes hacer lo que necesites con la imagen procesada
      res.send('Imagen procesada con éxito');
    } catch (error) {
      res.status(500).send('Error al procesar la imagen');
    }
  } else {
    // Manejar otros tipos de archivos o extensiones aquí
    res.send('Archivo procesado con éxito');
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
