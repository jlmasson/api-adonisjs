'use strict'

const Cinema = use('App/Models/Cinema')
const Genre = use('App/Models/Genre')


class CinemaController {
  async allCinemas ({response}) {
    const cinemas = await Cinema.query().withCount('rooms as number_of_rooms').fetch()
    return response.json(cinemas)
  }

  async findCinema ({response, params}) {
    let idCinema = params.id
    const cinema = await Cinema.find(idCinema)
    await cinema.get_info()
    return response.json({data: cinema})
  }

  async allGenres ({response}) {
    const genres = await Genre.all()
    return response.json(genres)
  }
}

module.exports = CinemaController
