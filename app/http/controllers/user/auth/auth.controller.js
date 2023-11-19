const createHttpError = require("http-errors");
const { authSchema } = require("../../../validations/user/auth.schema");
const Controller = require("../../controller");

class UserAuthController extends Controller{
    async login(req,res,next){
        try{
            console.log(req.body)
            const result = await authSchema.validateAsync(req.body);
            console.log(result)
            return res.status(200).send('ورود شما با موفقیت انجام شد');
        }catch(error){
            next(createHttpError.BadRequest(error.message));
        }
    }
}

module.exports = {
    UserAuthController : new UserAuthController()
}