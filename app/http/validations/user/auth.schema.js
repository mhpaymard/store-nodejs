const Joi = require('@hapi/joi');
const authSchema = Joi.object({
    mobile: Joi.string().required().length(11).pattern(/^09[0-9]{9}$/).error(new Error('شماره موبایل وارد شده نادرست است'))
})
module.exports = {
    authSchema
}