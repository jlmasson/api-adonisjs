'use strict'

const Model = use('Model')

class Seat extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }
}

module.exports = Seat
