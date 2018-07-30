'use strict'

const Model = use('Model')

class Customer extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static async find_by_column(column, value) {
    return this.findBy(column, value)
  }

  bookings () {
    return this.hasMany('App/Models/Booking')
  }

  static async get_info (limit=0) {
    return limit;
  }
}

module.exports = Customer
