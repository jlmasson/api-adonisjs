'use strict'

const MovieShowing = use('App/Models/MovieShowing')

const CinemaController = use('App/Controllers/Http/CinemaController')

class MovieController {
  async byCinema ({response, params}) {
    return CinemaController.findCinema({response, params})
  }

  async byMovie({response, params}) {
    
  }
}

module.exports = MovieController
