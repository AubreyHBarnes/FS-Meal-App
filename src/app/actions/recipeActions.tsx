import { databases } from "@/appwrite/config";
// import { ID } from 'appwrite';

// async function 

export async function getRecipes(): Promise<Recipe[]> {
    const response = await databases.listDocuments(
        // What DB?
        process.env.AW_DB_ID,
        // What Collection?
        process.env.AW_COLLECTION_ID_RECIPES
      );

      const recipes: Recipe[] = response.documents.map((doc) => ({
        $id: doc.$id,
        $createdAt: doc.$createdAt,
        recipeName: doc.recipeName,
        recipeId: doc.recipeId
      }))

      return recipes
}