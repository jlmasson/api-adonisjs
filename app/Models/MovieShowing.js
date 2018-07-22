'use strict'

const Model = use('Model')

class MovieShowing extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
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
