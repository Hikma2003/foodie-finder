import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MealCard from "@/components/MealCard";
import { searchMeals } from "@/services/mealApi";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Home() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchMeals(query);
      const data = response.data as { meals: Meal[] | null };
      const results = data.meals || [];
      setMeals(results);
    } catch {
      setError("Failed to fetch meals.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/food.jpg')" }}
    >
      <div className="bg-white bg-opacity-60 min-h-screen p-4">
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-gray-500 mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {meals && meals.length === 0 && <p className="mt-4">No meals found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {meals?.map((meal) => (
            <MealCard
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
