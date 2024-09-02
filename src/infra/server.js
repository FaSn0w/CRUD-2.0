import express from "express";
import bodyParser from "body-parser";
import db from "../config/mongoConection.js";
import backendRoutes from "../routes/backend/backendRoutes.js"
import frontendRoutes from "../routes/frontend/frontendRoutes.js"
import cors from 'cors';
import corsOptions from "../middlewares/CorsOptions.js";

// Connecta ao banco de dados
db.on("error", console.log.bind(console, "Erro de conexão...")); // bind = ligar , conectar.
db.once("open", () => console.log("Conexão com o banco de dados estabelecida."));

// instancia do express
const app = express();

// Configura o middleware do body-parser - Usado para tranformar a string em objetos do javascript
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o cors na aplicação
app.use(cors(corsOptions))

// configuração das rotas de frontend
app.use(frontendRoutes)

// backend routes
app.use(backendRoutes)



// Exporta a instância do servidor
export default app;
