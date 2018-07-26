'use strict'

const Model = use('Model')

class MovieShowing extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static async find_by_column(column, value) {
    return this.findBy(column, value)
  }

  async get_info () {
    let params = {
      movie_showing_times: (movie_showing_times) => {
        movie_showing_times
          .where('hour_to_show', '>=', new Date().getHours())
          .with('bookings', (bookings) => {
            bookings.with('seats')
          })
      },
      movie: (movie) => {
        movie.with('genres', (genres) => {
          genres.select('genre_name')
        })
      },
      room: null
    }
    return this.loadMany(params)
  }

  movie () {
    return this.belongsTo('App/Models/Movie')
  }

  movie_showing_times () {
    return this.hasMany('App/Models/MovieShowingTime')
  }

  room () {
    return this.belongsTo('App/Models/Room')
  }

  cinema () {
    return this.belongsTo('App/Models/Cinema')
  }
}

module.exports = MovieShowing
