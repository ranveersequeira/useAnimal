import React, { useState, useEffect } from 'react';

function useAnimalSearch() {
    const [animals, setAnimals] = useState([]);



    useEffect(() => {
        const lastQuery = localStorage.getItem("lastQuery")
        searchAnimals(lastQuery)
    }, [])


    const searchAnimals = async (q) => {
        const response = await fetch("https://localhost:8080?" + new URLSearchParams({ q }))
        const data = await response.json();
        setAnimals(data);
        localStorage.setItem("lastQuery", q)
    };
}

export default useAnimalSearch;
