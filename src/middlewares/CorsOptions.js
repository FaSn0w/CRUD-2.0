import dotenv from 'dotenv';
dotenv.config()

const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*', // Valor padrão se a variável não estiver definida
};

export default corsOptions;