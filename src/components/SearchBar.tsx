import { useState, type JSX } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="w-[80%] max-w-md mx-auto px-4 pt-6">
      <input
        type="text"
        placeholder="Search meals 🍲"
        value={inputValue}
        onChange={handleChange}
        className="w-full px-6 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff7043] focus:ring-offset-2 bg-white/80 backdrop-blur-sm placeholder:text-gray-500"
      />
    </div>
  );
}

export default SearchBar;