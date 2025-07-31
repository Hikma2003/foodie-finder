import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

type MealCardProps = {
  id: string;
  name: string;
  image: string;
};

function MealCard({ id, name, image }: MealCardProps) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteMeals");
    if (stored) {
      const favs = JSON.parse(stored) as MealCardProps[];
      setIsFav(favs.some((meal) => meal.id === id));
    }
  }, [id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents triggering link click
    const stored = localStorage.getItem("favoriteMeals");
    let favs: MealCardProps[] = stored ? JSON.parse(stored) : [];

    if (isFav) {
      favs = favs.filter((meal) => meal.id !== id);
    } else {
      favs.push({ id, name, image });
    }

    localStorage.setItem("favoriteMeals", JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <Link
      to={`/meal/${id}`}
      className="relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white group"
    >
      <img src={image} alt={name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#ff7043]">{name}</h3>
      </div>

      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 text-2xl text-red-500 hover:scale-110 transition z-10"
      >
        {isFav ? <FaHeart /> : <FaRegHeart />}
      </button>
    </Link>
  );
}

export default MealCard;