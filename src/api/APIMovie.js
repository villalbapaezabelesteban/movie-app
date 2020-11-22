const getMovieRequest = async (searchValue, setMovies) => {
    if (searchValue && searchValue.length >= 3) {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }
};

export { getMovieRequest };