import { useEffect, useState } from "react";
import MealCard from "../components/MealCard"; // Adjust based on your folder setup

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteMeals");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {favorites.length > 0 ? (
        favorites.map((meal) => (
          <MealCard key={meal.id} id={meal.id} name={meal.name} image={meal.image} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500 text-lg">
          No favorite meals yet 🍳
        </p>
      )}
    </div>
  );
}

export default Favorites;