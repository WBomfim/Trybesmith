import Joi from 'joi';
import IUser from '../interfaces/user';
import Messages from '../types/userMessages';
import IReturnValidations from '../interfaces/returnValidations';

const schemaUsername = Joi.string().min(3).required().messages({
  'string.empty': Messages.USERNAME_REQUIRED,
  'string.base': Messages.USERNAME_STRING_REQUIRED,
  'string.min': Messages.USERNAME_MIN,
  'any.required': Messages.USERNAME_REQUIRED,
});

const schemaClasse = Joi.string().min(3).required().messages({
  'string.empty': Messages.CLASSE_REQUIRED,
  'string.base': Messages.CLASSE_STRING_REQUIRED,
  'string.min': Messages.CLASSE_MIN,
  'any.required': Messages.CLASSE_REQUIRED,
});

const schemaLevel = Joi.number().min(1).required().messages({
  'number.empty': Messages.LEVEL_REQUIRED,
  'number.base': Messages.LEVEL_NUMBER_REQUIRED,
  'number.min': Messages.LEVEL_MIN,
  'any.required': Messages.LEVEL_REQUIRED,
});

const schemaPassword = Joi.string().min(8).required().messages({
  'string.empty': Messages.PASSWORD_REQUIRED,
  'string.base': Messages.PASSWORD_STRING_REQUIRED,
  'string.min': Messages.PASSWORD_MIN,
  'any.required': Messages.PASSWORD_REQUIRED,
});

const validateUserInfos = (user: IUser): IReturnValidations | true => {
  const { username, classe, level, password } = user;
  const schema = Joi.object({
    username: schemaUsername,
    classe: schemaClasse,
    level: schemaLevel,
    password: schemaPassword,
  });

  const { error } = schema.validate({ username, classe, level, password });
  if (error) {
    const [code, message] = error.message.split('|');
    return { error: { code: Number(code), error: { message } } };
  }

  return true;
};

export default validateUserInfos;
