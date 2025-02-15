import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes} from "sequelize";
import sequelize from "../db/databaseconfig";

/** 
 - Classe que define o objeto que representa uma linha do banco de dados 
 - Necessário para o ORM fazer seu mapeamento dentro da aplicação
*/
class ConsumerUnitEconomies extends Model<InferAttributes<ConsumerUnitEconomies>, InferCreationAttributes<ConsumerUnitEconomies>> {
    declare id: CreationOptional<number>;
    declare consumer_unit: number;
    declare status: string;
    declare month_ref: Date;
    declare value: number;
    declare economy_value: number;
    declare power_distribution_unit_bill_value: number;
}

/**
 - O .init mapea como cada atributo deve estar nas colunas do banco de dados, os tipos e as constraints
 */
ConsumerUnitEconomies.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    consumer_unit: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    month_ref: {
        type: DataTypes.DATE,
        allowNull: false
    },
    value: {
        type: DataTypes.REAL,
        allowNull: false
    },
    economy_value: {
        type: DataTypes.REAL,
        allowNull: false
    },
    power_distribution_unit_bill_value: {
        type: DataTypes.REAL,
        allowNull: false
    }
}, {
    sequelize, 
    tableName: "consumer_unit_economies",
    timestamps: false,
});

export default ConsumerUnitEconomies;