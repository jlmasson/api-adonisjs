'use strict'

const Model = use('Model')
const moment = require('moment')

class Cinema extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  async get_info () {
    let params = {
      movie_showings: (movie_showing) => {
        movie_showing
          .select('id', 'movie_id', 'room_id')
          .where('movie_show_date', moment(new Date()).format("YYYY-MM-DD"))
          .with('movie_showing_times', (movie_showing_time) => {
            movie_showing_time
              .where('hour_to_show', '>=', (new Date()).getHours())
              .with('bookings', (bookings) => {
                bookings.with('seats')
              })
          })
          .with('movie', (movie) => {
            movie
              .with('genres', (genres) => {
                genres
                  .select('genre_name')
              })
          })
          .with('room')
      }
    }
    return this.loadMany(params)
  }

  movie_showings () {
    return this.hasMany('App/Models/MovieShowing')
  }

  rooms () {
    return this.hasMany('App/Models/Room')
  }
}

module.exports = Cinema
