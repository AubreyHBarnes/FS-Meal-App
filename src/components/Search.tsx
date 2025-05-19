'use client';

import { useState, useEffect } from "react";
 
export default function Search({ placeholder }: { placeholder: string }) {
    const [searchTerm, setSearchTerm] = useState(""); // Tracks the input value
    const [debouncedTerm, setDebouncedTerm] = useState(""); // Tracks the debounced value
    const [showSearch, setShowSearch] = useState(false);

    // Debounce logic: Update `debouncedTerm` after a delay
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedTerm(searchTerm);
      }, 1000); // 1000ms delay
  
      return () => {
        clearTimeout(handler); // Clear timeout if the user types again
      };
    }, [searchTerm]);
  
    // Trigger the search function when `debouncedTerm` changes
    useEffect(() => {
      if (debouncedTerm) {
        handleSearch(debouncedTerm);
      }
    }, [debouncedTerm]);
  
    async function handleSearch(term: string) {
    //   console.log("Searching for:", term);
      // Add your database query or API call here
      const res = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/search.php?s=${term}`)
        const details = await res.json();
        console.log(details.meals);
    }
 
  return (
    <div className="flex flex-col items-center justify-start min-h-[150px]">
        <button 
        onClick={() => {setShowSearch(!showSearch)}}
        className="max-w-min px-4 py-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent
            hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">Search</button>
        <input 
            type="search" 
            id="default-search" 
            onChange={(e) => {
                if (e.target.value.length >= 2 && e.target.value !== "") {
                    setSearchTerm(e.target.value);
                    // handleSearch(e.target.value);
                }
                
            }}
            className={`${showSearch ? "opacity-100 border" : "opacity-0  border-[0px]"} p-4 ps-10 block w-full text-sm 
            text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition-[opacity] ease-in-out duration-300
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`} 
        placeholder={placeholder} required />
    </div>
  );
}