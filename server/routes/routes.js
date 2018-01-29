const express =  require('express');
const router = express.Router();
const waterWalls = require('../controllers/controller.js').waterWallsController;

router.post('/', waterWalls);