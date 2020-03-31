const express = require('express')

const OngsController = require('./controllers/OngsController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfilesController = require('./controllers/ProfilesController')
const SessionsController = require('./controllers/SessionsController')

const routes = express.Router()

routes.post('/sessions', SessionsController.create)

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.store)

routes.get('/profile', ProfilesController.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.store)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes