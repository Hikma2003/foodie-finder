import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "@/services/mealApi";

type MealDetailType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
};

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState<MealDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await getMealById(id!);
        const data = response.data as { meals: MealDetailType[] };
        const result = data.meals[0];
        setMeal(result);
      } catch {
        setError("Failed to load meal details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!meal) return <p className="p-4">Meal not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-w-md rounded mb-4" />
      <p className="mb-2"><strong>Category:</strong> {meal.strCategory}</p>
      <p className="mb-2"><strong>Area:</strong> {meal.strArea}</p>
      <p className="mb-4"><strong>Instructions:</strong> {meal.strInstructions}</p>
      {meal.strYoutube && (
        <div className="mt-4">
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Watch Cooking Video
          </a>
        </div>
      )}
    </div>
  );
}

export default MealDetail;
