const getMovieRequest = async (searchValue, setMovies) => {
    if (searchValue && searchValue.length >= 3) {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5aa91a63`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }
};

export { getMovieRequest };