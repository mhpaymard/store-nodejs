const { Router } = require('express');
const { UserAuthController } = require('../../http/controllers/user/auth/auth.controller');

const router = new Router();

router.post('/login',UserAuthController.login);

module.exports = {
    UserAuthRoutes : router
}