import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const fetchConsumerUnits = async (page: number) => {
    const response = await fetch(`http://localhost:8080/consumer-unit-economies?page=${page}&limit=10`);

    if(!response.ok) {
        throw new Error("Erro ao buscar os dados");
    }
    return response.json();
}

export function useConsumerUnits() {
    const [page, setPage] = useState(1);

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