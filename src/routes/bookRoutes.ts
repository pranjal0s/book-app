import { Router } from 'express'
import bookEntryController from '../controllers/entryController'
// import {validatecreate, updateValidater }from '../validator/validator'
import reqValidator from '../validator/validator'

//import router and book controllers

const mainRouter = Router()
const event = new bookEntryController()
const validator = new reqValidator()

//routes

//route to create book entry
mainRouter.route('/api/bookEntry/createEntry').post(validator.makeValidation('create'),event.create)
//to get all entry
mainRouter.route('/api/bookEntry/getAll').get(event.findAll)
//to get entry by id
//if any value is being passed as params then the route must contain the key for that value
mainRouter.route('/api/bookEntry/findBy_Id/:book_Id').get(event.findBy_Id)
//to delete one entry by id
mainRouter.route('/api/bookEntry/deleteBy_Id').delete(event.deleteBy_Id)
//to update title
mainRouter.route('/api/bookEntry/update').post(event.update)

mainRouter.route('/api/bookEntry/findBy_Title').get(event.findBy_Title)

export default mainRouter