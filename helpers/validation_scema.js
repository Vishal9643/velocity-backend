const joi = require("@hapi/joi");

const authSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi.string().required(),
  fname: joi.string(),
  lname: joi.string(),
  otp: joi.number(),
});

module.exports = {
  authSchema: authSchema,
};
