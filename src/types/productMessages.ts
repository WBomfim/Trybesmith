enum ProductMessages {
  NOT_CREATED = 'Product not created',
  NOT_FOUND = 'Product not found',
  NAME_REQUIRED = '400|"name" is required',
  NAME_STRING_REQUIRED = '422|"name" must be a string',
  NAME_MIN = '422|"name" length must be at least 3 characters long',
  AMOUNT_REQUIRED = '400|"amount" is required',
  AMOUNT_STRING_REQUIRED = '422|"amount" must be a string',
  AMOUNT_MIN = '422|"amount" length must be at least 3 characters long',
}

export default ProductMessages;
