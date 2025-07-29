import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🔍 Search meals by name
export const searchMeals = (query: string) =>
  axios.get(`${BASE_URL}/search.php?s=${query}`);

// 🆔 Get meal by ID
export const getMealById = (id: string) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);

// 🎲 Get a random meal
export const getRandomMeal = () =>
  axios.get(`${BASE_URL}/random.php`);

// 📂 Get categories (optional feature)
export const getCategories = () =>
  axios.get(`${BASE_URL}/categories.php`);
