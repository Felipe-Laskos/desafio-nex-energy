import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export type ConsumerUnitEconomy = {
    consumer_unit: number,
    economy_percentage: number
}

export interface ApiReturn {
    currentPage: number,
    totalPages: number,
    totalItems: number,
    rows: ConsumerUnitEconomy[]
}

const fetchConsumerUnits = async (page: number): Promise<ApiReturn> => {
    const response = await fetch(`http://localhost:8080/consumer-unit-economies?page=${page}&limit=10`);
    
    if(!response.ok) {
        throw new Error("Erro ao buscar os dados");
    }
    return response.json();
}

/**
 * Hook utilizando useQuery para puxar os dados da API
 * Utilizando useQuery, ele já se encarrega de tentar acessar a API mais de uma vez caso ocorra um erro no fetch
 * Re-renderiza os elementos da tabela, controlando a var data
 */

export function useConsumerUnits() {
    const [page, setPage] = useState(1);

    // Utilização do useQuery, usando a função fetchConsumerUnits
    const {data, isLoading, error} = useQuery({
        queryKey: ["consumerUnits", page],
        queryFn: () => fetchConsumerUnits(page),
    });

    return {
        data: data?.rows || [],
        totalPages: data?.totalPages || 1,
        isLoading,
        error,
        page,
        setPage
    }
}