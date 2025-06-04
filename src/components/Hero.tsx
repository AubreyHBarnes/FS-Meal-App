"use client"

// import { use, useState } from "react";
import Image from "next/image";
import Search from "./Search";


export default function Hero() {
    
    return (
        <section className="hero-container bg-center bg-no-repeat bg-cover w-full min-h-[20rem] relative">
            {/* <Navbar /> */}
            <header className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-dvh max-h-[35rem] relative">
                {/* <!-- Overlay Background + Center Control --> */}
            <div className="h-full bg-black/50 flex items-center justify-center tracking-wide">
                <div className="mx-2 text-center">
                <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                    Mixr
                </h1>
                <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                    Try something new, on the house
                </h2>
                <Search placeholder="Search for a recipe..." />
                </div>
            </div>
            </header>
        </section>
    );
}


