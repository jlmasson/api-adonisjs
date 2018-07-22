'use strict'

const Model = use('Model')

class Room extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  movie_showing () {
    return this.hasMany('App/Models/MovieShowing')
  }
}

module.exports = Room
