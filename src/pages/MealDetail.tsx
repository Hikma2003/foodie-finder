import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Card,
  CardContent,

  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
  const navigate = useNavigate();

  const [meal, setMeal] = useState<MealDetailType | null>(null);
  const [relatedMeals, setRelatedMeals] = useState<MealDetailType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch main meal by ID
  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
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

  // Fetch related meals by category
  useEffect(() => {
    const fetchRelatedMeals = async () => {
      if (!meal?.strCategory) return;
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal.strCategory}`
        );
        const data = response.data as { meals: MealDetailType[] };
        const filtered = data.meals.filter((m) => m.idMeal !== meal.idMeal);
        setRelatedMeals(filtered.slice(0, 6));
      } catch {
        console.error("Failed to fetch related meals.");
      }
    };

    fetchRelatedMeals();
  }, [meal]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!meal) return <p className="p-4">Meal not found.</p>;

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Main Meal Card */}
      <Card className="p-2 md:p-4">
        <CardContent className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* Image Left */}
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full md:w-1/3 rounded object-cover max-h-64"
          />

          {/* Description Right */}
          <div className="flex-1 space-y-2">
            <CardTitle className="text-xl md:text-2xl font-semibold">{meal.strMeal}</CardTitle>
            <Separator />
            <p className="text-sm md:text-base"><strong>Category:</strong> {meal.strCategory}</p>
            <p className="text-sm md:text-base"><strong>Area:</strong> {meal.strArea}</p>
            <Separator />
            <p className="text-sm md:text-base whitespace-pre-line">
              <strong>Instructions:</strong> {meal.strInstructions}
            </p>
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm block mt-2"
              >
                Watch Cooking Video
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Related Meals Section */}
      <section>
        <h2 className="text-lg md:text-xl font-semibold mb-4">Related Meals You Might Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedMeals.map((related) => (
            <Card
              key={related.idMeal}
              className="p-2 cursor-pointer hover:shadow-md transition"
              onClick={() => navigate(`/meal/${related.idMeal}`)}
            >
              <CardContent className="flex gap-4 items-center">
                <img
                  src={related.strMealThumb}
                  alt={related.strMeal}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <CardTitle className="text-sm font-medium">{related.strMeal}</CardTitle>
                  <p className="text-xs text-muted-foreground">{related.strCategory}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MealDetail;