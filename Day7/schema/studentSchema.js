const Joi = require("joi");

const fetchSchema = Joi.object({
  order: Joi.string().valid("ASC", "DESC"),
  sort: Joi.string().valid(
    "id",
    "firstName",
    "lastName",
    "phoneNumber",
    "age",
    "email",
    "gender"
  ),
});

const filterSchema = Joi.object({
  id: Joi.number().integer().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  phoneNumber: Joi.string()
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    )
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  age: Joi.number().integer(),
  gender: Joi.string().valid("male", "female", "other"),
});

const insertSchema = Joi.object({
  id: Joi.number().integer(),
  firstName: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    )
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  age: Joi.number().integer().required(),
  gender: Joi.string().valid("male", "female", "other"),
});

const updateSchema = Joi.object({
  id: Joi.number().integer().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  phoneNumber: Joi.string()
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    )
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
  age: Joi.number().integer(),
  gender: Joi.string().valid("male", "female", "other"),
});

const deleteSchema = Joi.object({
  id: Joi.number().integer(),
});

module.exports = {
  insertSchema,
  deleteSchema,
  updateSchema,
  fetchSchema,
  filterSchema,
};
