'use client'
import { useState} from 'react'

export default function RecipeList({ initialRecipes }: { initialRecipes: Recipe[] }) {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes)

  const handleDelete = async (recipeId: string) => {
 
  }

  console.log(recipes)

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.$id} id={recipe.$id} onClick={() => handleDelete(recipe.$id)}>
          <p>{recipe.recipeName}</p>
        </li>
      ))}
    </ul>
  )
}