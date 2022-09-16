import Joi from 'joi';
import User from '../interfaces/user';
import Messages from '../types/userMessages';
import ReturnValidations from '../interfaces/returnValidations';

export default (user: User) : ReturnValidations | true => {
  const { username, password } = user;
  const schema = Joi.object({
    username: Joi.string().required().messages({
      'string.empty': Messages.USERNAME_REQUIRED,
      'any.required': Messages.USERNAME_REQUIRED,
    }),
    password: Joi.string().required().messages({
      'string.empty': Messages.PASSWORD_REQUIRED,
      'any.required': Messages.PASSWORD_REQUIRED,
    }),
  });

  const { error } = schema.validate({ username, password });
  if (error) {
    const [code, message] = error.message.split('|');
    return { error: { code: Number(code), error: { message } } };
  }

  return true;
};
