'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchResultsPage() {
    const [results, setResults] = useState<any[]>([]);
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
        <div className="flex flex-col items-center justify-start min-h-screen p-4">
            <div className="mt-6 w-full max-w-4xl">
                {results.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.map((meal, index) => (
                            <li
                                key={index}
                                className="p-4 border rounded shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-lg font-semibold">
                                    {meal.strMeal}
                                </h2>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-full h-auto rounded mt-2"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No results found. Try searching for something else.</p>
                )}
            </div>
        </div>
    );
}
