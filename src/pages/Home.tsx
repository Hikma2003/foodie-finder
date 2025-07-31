import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MealCard from "@/components/MealCard";
import { searchMeals } from "@/services/mealApi";
import { GiKnifeFork } from "react-icons/gi";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Home() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setLoading(true);
    setError(null);
    try {
      const response = await searchMeals(searchQuery);
      const data = response.data as { meals: Meal[] | null };
      const results = data.meals || [];
      setMeals(results);
    } catch {
      setError("Failed to fetch meals.");
    } finally {
      setLoading(false);
    }
  };

  const bgMap: Record<string, string> = {
    vegetarian: "/veggie.jpg",
    dessert: "/dessert.jpg",
    pasta: "/pasta.jpg",
  };

  const dynamicBg = bgMap[query.toLowerCase()] || "/food.jpg";

  return (
    <div
      className="min-h-screen bg-cover bg-center relative font-sans"
      style={{ backgroundImage: `url('${dynamicBg}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fff8f0]/70 via-white/80 to-[#fefefe]/90 backdrop-blur-md">

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Title Section */}
        <div className="text-center mt-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#ff8a65] via-[#ff7043] to-[#ff5722] text-transparent bg-clip-text drop-shadow-xl">
            <GiKnifeFork className="inline-block mr-2 transform transition duration-300 hover:rotate-45" />
            Taste Explorer
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Discover delicious meals that match your cravings 🍽️
          </p>
        </div>

        {/* Status Messages */}
        {loading && (
          <p className="text-blue-500 mt-6 text-center animate-pulse">Loading meals...</p>
        )}
        {error && (
          <p className="text-red-500 mt-6 text-center">{error}</p>
        )}
        {meals && meals.length === 0 && (
          <p className="mt-6 text-center text-gray-600">No meals found — try another keyword 🌱</p>
        )}

        {/* Meal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4">
          {meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 rounded-xl p-4 hover:bg-gradient-to-br from-[#fff8f0] to-white"
            >
              <MealCard
                id={meal.idMeal}
                name={meal.strMeal}
                image={meal.strMealThumb}
              />
              <div className="mt-2 text-center text-sm text-[#ff7043] opacity-0 group-hover:opacity-100 transition-opacity">
                🔥 Chef’s Pick
              </div>
            </div>
          ))}
        </div>

        {/* Initial Prompt */}
        {!meals && (
          <div className="mt-20 text-center text-gray-500">
            <p className="text-lg">Search for your favorite dishes or ingredients to begin ✨</p>
          </div>
        )}
      </div>
    </div>
  );
}



export default Home;