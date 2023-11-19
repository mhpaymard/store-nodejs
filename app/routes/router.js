const { Router } = require('express');
const { HomeRoutes } = require('./api');
const { UserAuthRoutes } = require('./user/auth.route');

const router = new Router();

router.use('/', HomeRoutes);
router.use('/user',UserAuthRoutes);

module.exports = {
    AllRoutes: router
}