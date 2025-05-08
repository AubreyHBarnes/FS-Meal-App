

export default async function RecipeDetails({ params }: {params: Promise<{ id: string }>}) {
  
  const { id } = await params

    const res = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/lookup.php?i=${id}`)
    const details = await res.json();

    let fullRecipe = details.meals[0]
    console.log(fullRecipe.strMeal)
  return (
    <>
      
      <p>recipe ID {fullRecipe.strMeal}</p>
    </>
  );
};
