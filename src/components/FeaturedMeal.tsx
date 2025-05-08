import Image from "next/image";
import Link from "next/link";

type FeaturedMealProps = { 
    idMeal: number,
    strMeal: string,  
    strMealThumb: string,
    strInstructions: string
}

export default function FeaturedMeal(props: FeaturedMealProps) {
    
    return (
        <section className="featured-wrapper py-8 flex flex-col md:flex-row m-auto max-w-[800px]">
            <div className="featured-copy-container pb-6 md:p-6 md:basis-1/2 md:self-center">
                <p className="font-(family-name:--font-fjalla-one) text-3xl">{props.strMeal}</p>
                <p>Discover new flavors with our carefully curated culinary crafts!</p>

                {/* When i click the button below, I want to send the id to the recipe/[id].tsx and render the data from there. */}
                <Link href={`/recipes/${props.idMeal}`}>
                    <button className=" px-4 py-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent
                    hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">Meal of the Day</button>
                </Link>
            </div>
            <div className="featured-Img-container md:basis-1/2">
                <Image 
                    src={props.strMealThumb}
                    alt={props.strMeal}
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
}

// href={`/recipes/${props.idMeal}`}