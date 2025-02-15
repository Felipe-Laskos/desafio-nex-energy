import * as fs from "fs";
import * as path from "path";
import {parse} from "csv";

import ConsumerUnitEconomies from "../models/ConsumerUnitEconomies";


/**
 - Esta função é encarregada de carregar todos os dados de base_teste.csv para o banco de dados postgres
 - Não duplica os dados
 - Realiza o parse dos tipos para se adequarem ao certo
 */
export default function loadCsvToDatabase(): void {
    const csvFilePath = path.resolve(__dirname, "../base_teste.csv");
    const headers = ["id", "consumer_unit", "status", "month_ref", "value", "economy_value", "power_distribution_unit_bill_value"];

    // Lê todo o arquivo e armazena o conteúdo em fileContent
    const fileContent = fs.readFileSync(csvFilePath, {encoding: "utf-8"})

    // Com a biblioteca csv, temos a função parse. Ela funciona recebendo o conteúdo csv e mapeando para objetos, retornando um array deles
    parse(fileContent, {
        delimiter: ";",
        columns: headers,
        fromLine: 2,
        cast: (columnValue, context) => {
            // Cast para realizar o parse dos tipos para o tipo adequado
            const columnName = context.column;

            if(columnName === "id" || columnName === "consumer_unit") {
                return parseInt(columnValue);
            }

            if(columnName === "value" || columnName === "economy_value" || columnName === "power_distribution_unit_bill_value") {
                return Number(columnValue);
            }

            return columnValue;
        }
    }, async (error, result : ConsumerUnitEconomies[]) => {
        if(error) {
            console.log(error)
        }else {
            await ConsumerUnitEconomies.bulkCreate(result, {
                updateOnDuplicate: ["consumer_unit", "status", "month_ref", "value", "economy_value", "power_distribution_unit_bill_value"]
            }).then(() => {
                console.log("Sucesso ao carregar CSV")
            }).catch((err) => {
                console.log(err)
            });
        }
    });
};