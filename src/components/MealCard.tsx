import { Link } from "react-router-dom";

type MealCardProps = {
  id: string;
  name: string;
  image: string;
};

function MealCard({ id, name, image }: MealCardProps) {
  return (
    <Link to={`/meal/${id}`} className="block bg-white border rounded-lg shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-60 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </Link>
  );
}

export default MealCard;
