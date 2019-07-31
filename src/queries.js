import gql from 'graphql-tag'

export const HOME_PAGE = gql`
  query {
    movies(limit:50, rating: 7) {
    id
    title 
    rating
    genres
    medium_cover_image
  }
}
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!){ # for apollo
    movie(id: $movieId){  # for server
      medium_cover_image
      title
      rating
      description_full
      language
      genres
    }
    suggestions(id: $movieId){
      id
      medium_cover_image
      title
      rating
    }
  }
`
