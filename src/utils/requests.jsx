const API_KEY= import.meta.env.VITE_API_KEY
const requests  = {
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-networks=213`,
fetchTopRatedMovies:`/movie.top_rated?api_key=${API_KEY}&language=en-us`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTVShows:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

};

export default requests