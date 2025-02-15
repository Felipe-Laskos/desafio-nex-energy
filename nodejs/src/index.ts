import express, { Request, Response, Express } from "express";

import ConsumerUnitEconomies from "./models/ConsumerUnitEconomies";

import loadCsvToDatabase from "./services/loadCsvToDatabase";

import getGroupedConsumerUnitEconomies from "./services/getGroupedConsumerUnitEconomies";

const app: Express = express();

/**
 - Endpoint que retorna a economia agrupada por unidade consumidora
 - Funciona com paginação retornando as linhas da página atual
 - Funciona sem paginação retornando todos os resultados
 - Sempre retorna um json
 */
app.get("/consumer-unit-economies", async (req: Request, res: Response) => {
    // Captura o limit e page passados pelo GET, se não ouver, é definido como undefined
    const limit: number | undefined = parseInt(req.query.limit as string);
    const page: number | undefined = parseInt(req.query.page as string);

    // Se foi passado limit e page, vai ser tratado com paginação, se não, sem paginação retornando todos os valores
    if(limit && page) {
        const offset = (page - 1) * limit;
        const {count, rows} = await getGroupedConsumerUnitEconomies(limit, offset);

        const totalGroupCount: number = count.length;

        res.json({
            currentPage: page,
            totalPages: Math.ceil(totalGroupCount / limit),
            totalItems: totalGroupCount,
            rows: rows
        });
    }else {
        const allConsumerUnitEconomies = await ConsumerUnitEconomies.findAll();

        res.json(allConsumerUnitEconomies);
    }

});

// Inicia o servidor Nodejs na porta 8080, e utiliza a função loadCsvToDatabase para carregar os dados do Csv no banco de dados
app.listen(8080, () => {
    console.log("Server runnin on port 8080");
    loadCsvToDatabase();
});