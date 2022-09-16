enum OrderMessages {
  NOT_CREATED = 'Order not created',
  NOT_FOUND = 'Orders not found',
  ARRAY_INVALID = '422|"productsIds" must be an array',
  ARRAY_MIN = '422|"productsIds" must include only numbers',
  ARRAY_REQUIRED = '400|"productsIds" is required',
}

export default OrderMessages;
