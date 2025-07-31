import { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

function QuickBites() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("https://your-api.com/quickbites") // Replace with your actual endpoint
      .then((res) => {
        const enriched = res.data.meals.map((meal) => ({
          ...meal,
          image: `https://source.unsplash.com/400x300/?${meal.name}`
        }));
        setMeals(enriched);
      })
      .catch((err) => console.error("Error fetching quick bites:", err));
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-yellow-500">⚡ Quick Bites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} {...meal} />
        ))}
      </div>
    </div>
  );
}

export default QuickBites;