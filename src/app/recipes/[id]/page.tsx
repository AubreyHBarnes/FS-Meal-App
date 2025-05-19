

import Accordion from "@/components/DirectionsAccordion";
import IngredientsAccordion from "@/components/IngredientsAccordion";
import Image from "next/image";

export default async function RecipeDetails({ params }: {params: Promise<{ id: string }>}) {
  
  const { id } = await params

    const res = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/lookup.php?i=${id}`)
    const details = await res.json();

    let fullRecipe = details.meals[0]
    // ingredients and measurements were altered by copilot to fix a type error
    // declare ingredients, get the keys of fullRecipe, filter them to get only the ingredients and measurements, and then reduce them to an object
    // with the keys ingredient1, ingredient2, etc. and the values being the ingredients and measurements
    // I also added a check to make sure that the ingredient and measurement are not empty strings
    // and that they are not undefined

    const ingredients = Object.keys(fullRecipe)
      .filter(key => key.startsWith("strIngredient") && fullRecipe[key] && fullRecipe[key] !== " ")
      .reduce((acc, key, index) => {
        acc[`ingredient${index + 1}`] = fullRecipe[key];
        return acc;
      }, {} as { [key: string]: string });

    const measurements = Object.keys(fullRecipe)
      .filter(key => key.startsWith("strMeasure") && fullRecipe[key] && fullRecipe[key] !== " ")
      .reduce((acc, key, index) => {
        acc[`measurement${index + 1}`] = fullRecipe[key];
        return acc;
      }, {} as { [key: string]: string });
      
      
  return (
    <section className="py-4 flex flex-col md:flex-row px-3 gap-5 max-w-[1200px] m-auto">
      <div className="recipe-sidebar flex flex-col gap-3 md:max-w-1/3 md:self-center">
        <h1 className="text-center font-semibold capitalize text-xl">{fullRecipe.strMeal}</h1>
        <Image
          src={fullRecipe.strMealThumb}
          alt={fullRecipe.strMeal} 
          width={700}
          height={700}
          className="rounded-xl" />
          <IngredientsAccordion measurements={measurements} ingredients={ingredients} />
     
      </div>
      <div className="recipe-steps md:max-w-2/3">
          <Accordion title={fullRecipe.strMeal} description={fullRecipe.strInstructions} />

      </div>
      
    </section>
  );
};
