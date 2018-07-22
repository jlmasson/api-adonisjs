'use strict'

const Model = use('Model')

class Booking extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  seats () {
    return this.hasMany('App/Models/Seat')
  }

  movie_showing_time () {
    return this.belongsTo('App/Models/MovieShowingTime')
  }
}

module.exports = Booking
