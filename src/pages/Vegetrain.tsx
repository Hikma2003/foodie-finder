import { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

function Vegetrain() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://your-api.com/vegetarian") // Replace with your actual endpoint
      .then((res) => {
        console.log("Vegetarian API response:", res.data); // 👀 Check this in DevTools Console

        // Try to extract meals from different possible structures
        let rawMeals = [];

        if (Array.isArray(res.data)) {
          rawMeals = res.data;
        } else if (Array.isArray(res.data.meals)) {
          rawMeals = res.data.meals;
        } else if (Array.isArray(res.data.data)) {
          rawMeals = res.data.data;
        }

        // If no meals found, inject a test meal to verify rendering
        const enriched = rawMeals.length > 0
          ? rawMeals.map((meal, index) => ({
              id: meal.id || `fallback-${index}`,
              name: meal.name || meal.strMeal || "Unknown Meal",
              image: `https://source.unsplash.com/400x300/?${meal.name || meal.strMeal || "vegetarian"}`
            }))
          : [
              {
                id: "test1",
                name: "Grilled Veggie Wrap",
                image: "https://source.unsplash.com/400x300/?vegetarian"
              }
            ];

        setMeals(enriched);
      })
      .catch((err) => console.error("Error fetching vegetarian meals:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-green-600">🥦 Vegetarian Meals</h2>

      {loading ? (
        <p className="text-gray-500">Loading meals...</p>
      ) : meals.length === 0 ? (
        <p className="text-red-500">No vegetarian meals found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Vegetrain;