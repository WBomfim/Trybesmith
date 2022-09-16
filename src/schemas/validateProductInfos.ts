import Joi from 'joi';
import IProduct from '../interfaces/product';
import Messages from '../types/productMessages';
import IReturnValidations from '../interfaces/returnValidations';

const schemaName = Joi.string().min(2).required().messages({
  'string.empty': Messages.NAME_REQUIRED,
  'string.base': Messages.NAME_STRING_REQUIRED,
  'string.min': Messages.NAME_MIN,
  'any.required': Messages.NAME_REQUIRED,
});

const schemaAmount = Joi.string().min(2).required().messages({
  'string.empty': Messages.AMOUNT_REQUIRED,
  'string.base': Messages.AMOUNT_STRING_REQUIRED,
  'string.min': Messages.AMOUNT_MIN,
  'any.required': Messages.AMOUNT_REQUIRED,
});

export default (product: IProduct) : IReturnValidations | true => {
  const { name, amount } = product;
  const schema = Joi.object({
    name: schemaName,
    amount: schemaAmount,
  });

  const { error } = schema.validate({ name, amount });
  if (error) {
    const [code, message] = error.message.split('|');
    return { error: { code: Number(code), error: { message } } };
  }

  return true;
};
