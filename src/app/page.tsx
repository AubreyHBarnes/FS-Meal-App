// 'use client'

import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedMeal from "@/components/FeaturedMeal";
import RecipeList from "@/components/RecipeList";
import { getRecipes } from './actions/recipeActions'
import Navbar from "@/components/Navbar";
import InfiniteSlider from "@/components/InfiniteSlider";

export default async function Home() {  
  const recipes: Recipe[] = await getRecipes();
  const latestRecipeData = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/random.php`)
  // const randomDrinkData = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/randomselection.php`)
  // const latestRecipe = await latestRecipeData.json();
  let featuredMeal = await latestRecipeData.json();
  let featuredMealObj: object = featuredMeal.meals[0];
  
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-8 px-8 items-center sm:items-start">
          
        <FeaturedMeal {...featuredMealObj} />
        <InfiniteSlider />
      </main>
      {/* <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <RecipeList initialRecipes={recipes} />
        </div>
      </div> */}
    </>
  );
}
