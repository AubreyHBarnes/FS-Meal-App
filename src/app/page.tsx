'use client'

import Image from "next/image";
import RecipeList from "@/components/RecipeList";
import { useEffect, useState } from "react";
// import { type Models } from 'appwrite';
import { databases } from "@/appwrite/config";
import { getRecipes } from './actions/recipeActions'

export default async function Home() {  
  const recipes: Recipe[] = await getRecipes();

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <RecipeList initialRecipes={recipes} />
      </div>
    </div>
  );
}
