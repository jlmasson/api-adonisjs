'use strict'

const MovieShowing = use('App/Models/MovieShowing')

const CinemaController = use('CinemaController')

class MovieController {
  async byCinema ({response, params}) {
    return CinemaController.findCinema({response, params})
  }

  async byMovie({response, params}) {
    const movie_id = params.movieId
    const movie = await MovieShowing.find_by_column('movie_id', movie_id)
    await movie.get_info();
    return response.json(movie)
  }
}

module.exports = MovieController
