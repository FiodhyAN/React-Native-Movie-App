const apikey:string = '27cf010edc7dee5972dd3e684fd121f2'
export const baseImagePath = (size:string, path:string) => {
    return 'https://image.tmdb.org/t/p/' + size + path
}
export const nowPlayingMovies:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apikey
export const upcomingMovies:string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apikey
export const popularMovies:string = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apikey
export const searchMovies = (keyword:string) => {
    return 'https://api.themoviedb.org/3/search/movie?api_key=' + apikey + '&query=' + keyword
}
export const movieDetails = (movieId:number) => {
    return 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + apikey
}
export const movieCastDetails = (movieId:number) => {
    return 'https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=' + apikey
}