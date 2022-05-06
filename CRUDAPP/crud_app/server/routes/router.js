const express = require('express');
//const app = express() would create new app so we create route
const route = express.Router() // method of express :we create a different touter in a separate file

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-game', services.add_game)

/**
  *  @description for update user
  *  @method GET /update-user
  */
route.get('/update-game', services.update_game)


// API/*
route.post('/api/games', controller.create);
route.get('/api/games', controller.find); // this route to get single & multiple users
route.put('/api/games/:id', controller.update);
route.delete('/api/games/:id', controller.delete);


module.exports = route