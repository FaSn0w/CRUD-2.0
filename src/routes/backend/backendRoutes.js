import bcrypt from 'bcrypt';
import registroController from "../../controllers/UserControllers.js";
import express from 'express';
const backendRoutes = express.Router();


// Define a rota para o processamento do formulário de login
backendRoutes
  .route('/login')
  .post(async (req, res) => {
    const { username, password } = req.body;
    const validacao = await registroController.verificaUsuario(username, password);

    if (validacao.bool) {
        // Retorna a mensagem de sucesso para o usuário
        res.send('Login efetuado com sucesso!');
    } else {
        // Retorna uma mensagem de erro para o usuário
        res.status(401).send(validacao.message);
    }
});

// Define a rota para o processamento do formulário de registro
backendRoutes
  .route('/register')
  .post(async (req, res) => {
    try {
        const { username, email, password, "confirm-password": confirmPassword } = req.body;
        // Aqui foi usada a desestruturação ES6 para criar constantes a partir do objeto req.body porem devido ao Javascript 
        // não ser convencional usar variaveis com hifen , foi renomeado para confirmPassword. 

        if (password !== confirmPassword) {
            return res.status(400).send('<h1>As senhas não conferem!</h1><a href="/login">Login</a>');
        }
        const hashedPassword = await  bcrypt.hash(password,10);
        // verificar se o já existe;
        registroController.cadastrarUser({ username, email, hashedPassword });
        res.send('<h1>Usuário registrado com sucesso!</h1><a href="/login">Login</a>');
    } catch {
        res.status(500).send('<h1>Algo errado não esta certo</h1>');
    }   

});

export default backendRoutes;