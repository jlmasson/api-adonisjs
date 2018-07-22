'use strict'

const Model = use('Model')

class Cinema extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  movie_showings () {
    return this.hasMany('App/Models/MovieShowing')
  }

  rooms () {
    return this.hasMany('App/Models/Room')
  }
}

module.exports = Cinema
