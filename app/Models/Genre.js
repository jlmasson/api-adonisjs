'use strict'

const Model = use('Model')

class Genre extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  movies () {
    return this.belongsToMany('App/Models/Movie')
  }
}

module.exports = Genre
