import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Foodie Finder
        </Link>
      </div>
    </header>
  );
}

export default Header;
