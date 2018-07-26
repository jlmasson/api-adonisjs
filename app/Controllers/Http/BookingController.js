'use strict'

const Booking = use('App/Models/Booking')
const Seat = use('App/Models/Seat')
const Customer = use('App/Models/Customer')
const Database = use('Database')

class BookingController {
  async save ({response, request, auth}) {
    const trx = await Database.beginTransaction()

      const user = await auth.getUser()
      const customer = await Customer.find_by_column('user_id', user.id)
      const seat_count = request.input('seats').length
      const booking = await Booking.create({
        customer_id: customer.id,
        movie_showing_time_id: request.input('movie_showing_times_id'),
        booking_seat_count: seat_count,
        booking_made_date: new Date()
      }, trx)

      let seats = []

      for (let i = 0; i < seat_count; i++) {
        console.log(i)
      }
      
    trx.commit()
  }
}

module.exports = BookingController
