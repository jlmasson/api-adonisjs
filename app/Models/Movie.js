'use strict'

const Model = use('Model')

class Movie extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  genres () {
    return this.belongsToMany('App/Models/Genre')
  }
}

module.exports = Movie
