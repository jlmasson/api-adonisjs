'use strict'

const Model = use('Model')

class MovieShowingTime extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  movie_showing () {
    return this.belongsTo('App/Models/MovieShowing')
  }

  bookings () {
    return this.hasMany('App/Models/Booking')
  }

}

module.exports = MovieShowingTime
