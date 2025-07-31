function About() {
  return (
    <section className="bg-white/90 backdrop-blur-sm py-16 px-6 text-center rounded-xl shadow-xl max-w-4xl mx-auto mt-16 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7043] via-[#ff5722] to-[#ff8a65] text-transparent bg-clip-text drop-shadow-md">
          About Taste Explorer
        </h2>
        <p className="mt-2 text-md text-gray-600 italic tracking-wide">
          Craving. Searching. Exploring. 🍴
        </p>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        Taste Explorer is your digital sous-chef — guiding you through a flavorful journey of meals,
        moods, and memories. Whether you're a kitchen newbie or a seasoned home chef, this app is built
        to spark curiosity and celebrate food as culture, comfort, and joy.
      </p>

      <p className="mt-4 text-base text-gray-600">
        Created by passionate devs who believe good design is like a good dish — balanced, beautiful,
        and unforgettable. 🍜 Built with React, Tailwind, and a pinch of ❤️ in Addis Ababa.
      </p>

      <div className="mt-6 text-xl">🌍 • 🍜 • ❤️</div>
    </section>
  );
}

export default About;