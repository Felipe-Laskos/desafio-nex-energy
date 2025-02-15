import ConsumerUnitEconomies from "../models/ConsumerUnitEconomies";

import sequelize from "../db/databaseconfig";
import { GroupedCountResultItem } from "sequelize";

interface CountRowsConsumerUnits {
    count: GroupedCountResultItem[],
    rows: ConsumerUnitEconomies[]
};

/**
 - Esta função é encarregada de realizar a query das economias agrupadas por unidade consumidora
 - Funciona com paginação dos registros, recebendo o limit e o offset
 - Retorna a contagem de linhas e as linhas com os dados
 */
export default async function getGroupedConsumerUnitEconomies(limit: number, offset: number): Promise<CountRowsConsumerUnits> {
    const {count, rows} = await ConsumerUnitEconomies.findAndCountAll({
        attributes: [
        "consumer_unit",
        [
            sequelize.literal(
            "(SUM(economy_value) / SUM(value + economy_value + power_distribution_unit_bill_value) * 100)"
            ),
            "economy_percentage"
        ]
        ],
        limit,
        offset,
        group: ["consumer_unit"],
        order: [["economy_percentage", "DESC"]],
    });

    return {count, rows};
};