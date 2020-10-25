import notFound from '../assets/images/404.jpeg';

export default class HTTPService {
    movieUrl = 'https://api.themoviedb.org/3/';
    key = '20d8cb1512e14482ac9d9b24e1941015';
    lang = 'language=en-US';


    getResource = async (url) => {
      const res = await fetch(`${this.movieUrl}${url}`);
      if (!res.ok) {
        throw new Error('Fetch error!')
      }
      const json = await res.json();
      return json;
    };

    transformMovieData = (movie, genres) => ({
      id: movie.id,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : notFound,
      background: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : notFound,
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      genres: movie.genre_ids.reduce((acc, id) => `${acc}${genres[id]}, `, '').slice(0, -2),
      viewInfo: false,
    });

    handleResult = (res, genres) => {
      const amount = 16;
      const { results } = res;
      if (results.length > amount) {
        results.length = amount;
      }
      return results.map((movie) => this.transformMovieData(movie, genres));
    }


    getGenres = async () => {
      const res = await this.getResource(`genre/movie/list?api_key=${this.key}&${this.lang}`);
      const { genres } = res;
      return genres.reduce((acc, genre) => {
        const { id, name } = genre;
        acc[id] = name;
        return acc;
      }, []);
    }

    getTrending = async (genres) => {
      const res = await this.getResource(`movie/popular?api_key=${this.key}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getTopRated = async (genres) => {
      const res = await this.getResource(`movie/top_rated?api_key=${this.key}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getComingSoon = async (genres) => {
      const res = await this.getResource(`movie/upcoming?api_key=${this.key}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getByGenre = async (genre, genres) => {
      const res = await this.getResource(`discover/movie?api_key=${this.key}&${this.lang}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`);
      return this.handleResult(res, genres);
    }

    getSearch = async (genres, inputValue) => {
      const res = await this.getResource(`search/movie?api_key=${this.key}&${this.lang}&query=${inputValue}&page=1&include_adult=false`);
      return this.handleResult(res, genres);
    }

    getTrailer = async (id) => {
      const res = await this.getResource(`movie/${id}/videos?api_key=${this.key}&${this.lang}`);
      const { results } = res;
      return results[0];
    }
}
