import { Sequelize } from "sequelize";
require('dotenv').config();

/** 
 - Configuração do sequelize para conectar ao banco de dados
 - Utiliza environment variables para fácil manutenção e fácil adesão à um ambiente de produção
 - Configurado para utilizar PostgreSql
*/
const sequelize: Sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres",    
    define: {
        timestamps: false
    }
});

export default sequelize;