// About.jsx

function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-400">
                    About Movie Deck
                </h1>

                <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
                            Welcome to Movie Deck!
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Movie Deck is a web application designed for movie enthusiasts. Whether you're looking for the latest popular movies or searching for a specific title, our goal is to provide a simple, fast, and user-friendly experience for discovering your next favorite film.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
                            Our Features
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>
                                <span className="font-semibold">Explore Popular Movies:</span> Stay up-to-date with a curated list of currently popular movies.
                            </li>
                            <li>
                                <span className="font-semibold">Powerful Search:</span> Quickly find any movie by title with our instant search functionality.
                            </li>
                            <li>
                                <span className="font-semibold">Detailed Information:</span> Get essential details for each movie, including its poster, release date, rating, and genres.
                            </li>
                            <li>
                                <span className="font-semibold">Easy Navigation:</span> Seamlessly browse through search results and popular movie lists with our intuitive pagination.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
                            Technology Stack
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            This project was built using modern web technologies to ensure a robust and responsive experience:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">React.js</span>
                            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">React Hooks (useState, useEffect, useCallback)</span>
                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                            <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">JavaScript (ES6+)</span>
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
                            Data Source
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            All movie data, including images, titles, and ratings, is provided by a public movie API, such as The Movie Database (TMDB). We are grateful for their service which makes this project possible.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;