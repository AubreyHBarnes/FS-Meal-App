'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ app directory

export default function Search({ placeholder }: { placeholder: string }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.length >= 2) {
            router.push(`/results?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-[150px]">
            <button 
                onClick={() => {setShowSearch(!showSearch)}}
                className="max-w-min px-4 py-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent
                    hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">Search</button>
            <form onSubmit={handleSubmit} className="w-full">
                <input 
                    type="search" 
                    id="default-search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`${showSearch ? "opacity-100 border" : "opacity-0  border-[0px]"} p-4 ps-10 block w-full text-sm 
                    text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition-[opacity] ease-in-out duration-300
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`} 
                    placeholder={placeholder} required 
                />
            </form>
        </div>
    );
}
