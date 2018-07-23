'use strict'

const Hash = use('Hash')

const UserHook = exports = module.exports = {}
const Customer = use('App/Models/Customer')

UserHook.hashPassword = async (userInstance) => {
  if (userInstance.dirty.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}

UserHook.setCustomer = async (userInstance) => {
  let customer = new Customer()
  userInstance.customer().save(customer)
}
