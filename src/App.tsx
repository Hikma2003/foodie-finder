import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/about";
import Favorites from "@/pages/Favorites";
import Home from "@/pages/Home";

import QuickBites from "@/pages/QuickBites";
import Vegetrain from "./pages/Vegetrain";  
import MealDetail from "@/pages/MealDetail";
import Header from "@/components/Header";
import "./index.css"; // if using Tailwind

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/vegetarian" element={<Vegetrain />} />
        <Route path="/quickbites" element={<QuickBites />} />
      </Routes>
    </Router>
  );
}

export default App;