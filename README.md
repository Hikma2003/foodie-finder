# 🍽️ Foodie Finder

**Foodie Finder** is a beautifully crafted React web application that lets users search for meals from around the world using the [TheMealDB API](https://www.themealdb.com/api.php)[cite: 5, 19]. [cite_start]It offers a clean, responsive UI powered by Tailwind CSS and shadcn/ui components[cite: 6].

---

## ✨ Features

- 🔍 **Search Meals**: Users can search for meals by name, ingredient, or category and view a grid of matching meals with images and titles[cite: 23].
- 📖 **Meal Detail Page**: Shows detailed recipes, cooking instructions, area of origin, category, and includes a link to a YouTube cooking video if available[cite: 24].
- 🔗 **Related Meals**: Discover other meals from the same category directly on the detail page.
- ❤️ **Favorites**: Users can save their favorite meals locally using `localStorage` for quick access[cite: 58].
- ℹ️ **About Page**: Learn more about the Taste Explorer project.
- 🍱 **Beautiful & Responsive Meal Cards**: Visually appealing meal cards that adapt to various screen sizes.
- 🎲 **Random Meal Generator**: A fun feature to discover a random dish with one click (planned feature)[cite: 26].
- 🎨 **Sleek Design**: Styled with Tailwind CSS [cite: 16] [cite_start]and ShadCN UI [cite: 17] components for a modern look and feel.
- 🌍 **Mobile-First Design**: Ensures optimal viewing and interaction across all devices[cite: 27].
- ⚙️ **Robust State Management**: Utilizes React hooks for efficient data handling.
- 💥 **Graceful Error Handling**: Displays clear messages for loading, error, and no-results states[cite: 44].

---

## 🖼️ Preview

![Home Page Screenshot]
<img width="2560" height="1600" alt="food" src="https://github.com/user-attachments/assets/1b7041c5-0bd7-42d6-8257-148c930dc04a" />

*Consider replacing the generic screenshot above with an actual screenshot of your deployed application or a high-quality GIF showcasing the features for a better preview! beloooowwww*

---

## 🚀 Tech Stack

- **Frontend:** React [cite: 16] + [cite_start]Vite + TypeScript [cite: 16]
- **Styling:** Tailwind CSS [cite: 16][cite_start], ShadCN UI [cite: 17]
- **API:** [TheMealDB](https://www.themealdb.com/api.php) [cite: 19]
- **Routing:** React Router DOM [cite: 54]
- **HTTP Client:** Axios [cite: 18, 53]
- **Icons:** React Icons (`react-icons`) - (Inferred from `GiKnifeFork` in `Home.tsx`)

---

## 🛠️ Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/your-username/foodie-finder.git](https://github.com/your-username/foodie-finder.git)
    cd foodie-finder
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or yarn install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    # or yarn dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the address provided by Vite).

---

## 📁 Folder Structure

src/
├── components/         # Reusable UI components
│   ├── Header.tsx      # Application header
│   ├── MealCard.tsx    # Displays individual meal items
│   └── SearchBar.tsx   # Input for searching meals
│   └── ui/             # ShadCN UI components (e.g., Card, Button, Input, Separator, AspectRatio)
├── pages/              # Application pages/views
│   ├── Home.tsx        # Main search and results page
│   ├── MealDetail.tsx  # Detailed view for a single meal
│   ├── Favorites.tsx   # Page to display user's favorite meals
│   ├── About.tsx       # Information about the application
│   ├── Vegetrain.tsx   # Example: A page for vegetarian meals (if connected to API)
│   └── QuickBites.tsx  # Example: A page for quick bite meals (if connected to API)
├── services/           # API integration logic
│   └── mealApi.ts      # Functions for interacting with TheMealDB API
├── assets/             # Images and static files (e.g., dynamic backgrounds)
├── App.tsx             # Main application component, handles routing
└── main.tsx            # Entry point of the React application


---

## 🔧 API Reference

-   🔎 **Search Meals by Name:** `https://www.themealdb.com/api/json/v1/1/search.php?s={meal_name}`
-   🆔 **Get Meal Details by ID:** `https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}`
-   🎲 **Get Random Meal:** `https://www.themealdb.com/api/json/v1/1/random.php`
-   📂 **List Meal Categories:** `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
-   🔍 **Filter Meals by Category:** `https://www.themealdb.com/api/json/v1/1/filter.php?c={category_name}`
-   🔍 **Filter Meals by Ingredient:** `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient_name}`

---

## 💡 Live Demo

[Coming soon: https://your-live-demo.vercel.app](http://localhost:5173/)

---
<img width="2560" height="1600" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/c7a18a1b-bf74-416f-a2b1-87beda45302d" />


## 🙋‍♀️ Author

With ❤️ by hikma jemal
