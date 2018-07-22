'use strict'

const Schema = use('Schema')

class SeatSchema extends Schema {
  up () {
    this.create('seats', (table) => {
      table.increments()
      table.integer('seat_row')
      table.integer('seat_number')
      table.enum('seat_state', ['AVAILABLE', 'BOOKED']).defaultTo('AVAILABLE')
      table.integer('booking_id').nullable().unsigned()
      table.foreign('booking_id').references('bookings.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('seats')
  }
}

module.exports = SeatSchema
