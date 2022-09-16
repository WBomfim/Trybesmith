import Joi from 'joi';
import IReturnValidation from '../interfaces/returnValidations';
import Messages from '../types/orderMessages';

const validateOrderInfos = (productsIds: number[]): IReturnValidation | true => {
  const schema = Joi.array().min(1).required().messages({
    'array.base': Messages.ARRAY_INVALID,
    'array.min': Messages.ARRAY_MIN,
    'any.required': Messages.ARRAY_REQUIRED,
  });

  const { error } = schema.validate(productsIds);
  if (error) {
    const [code, message] = error.message.split('|');
    return { error: { code: Number(code), error: { message } } };
  }
  
  return true;
};

export default validateOrderInfos;
