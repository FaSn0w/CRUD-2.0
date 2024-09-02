import path from 'path';
import url from 'url';
import express from 'express';
const frontendRoutes = express.Router();


// configs de importação
const __filename = url.fileURLToPath(import.meta.url);
const baseDir = path.dirname(__filename);
const __dirname = path.join(baseDir, '../../../');

// configs de estilização
frontendRoutes.use('/css', express.static(__dirname + '/front-end/css'));
frontendRoutes.use('/js', express.static(__dirname + '/front-end/js'))


frontendRoutes
  .route("/")
  .get((req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/index.html");
});

frontendRoutes
  .route('/login')
  .get((req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/login.html");
});

frontendRoutes
  .route('/register')
  .get((req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/registro.html");
});



export default frontendRoutes;