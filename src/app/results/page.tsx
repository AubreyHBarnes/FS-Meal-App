'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchResultsCard from "@/components/SearchResultsCard";
import Navbar from "@/components/Navbar";

export default function SearchResultsPage() {
    const [results, setResults] = useState<object[]>([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        if (!query) return;
        async function fetchResults() {
            const res = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/search.php?s=${encodeURIComponent(query)}`);
            const data = await res.json();
            setResults(data.meals || []);
        }
        fetchResults();
    }, [query]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-start min-h-screen p-4">
                <div className="mt-6 w-full max-w-4xl">
                    {results.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {results.map((meal: any, index) => (
                                <SearchResultsCard
                                key={index}
                                strResult={meal.strMeal}
                                strResultThumb={meal.strMealThumb}
                                strInstructions={meal.strInstructions}
                                />
                                
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No results found. Try searching for something else.</p>
                    )}
                </div>
            </div>
        </>
    );
}
