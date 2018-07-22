'use strict'

const Model = use('Model')

class Customer extends Model {
  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  bookings () {
    return this.hasMany('App/Models/Booking')
  }
}

module.exports = Customer
