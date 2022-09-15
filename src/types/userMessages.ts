enum UserMessages {
  NOT_CREATED = 'User not created',
  NOT_FOUND = 'User not found',
  PASS_OR_USER_INVALID = 'Username or password invalid',
  USERNAME_REQUIRED = '400|"username" is required',
  USERNAME_STRING_REQUIRED = '422|"username" must be a string',
  USERNAME_MIN = '422|"username" length must be at least 3 characters long',
  CLASSE_REQUIRED = '400|"classe" is required',
  CLASSE_STRING_REQUIRED = '422|"classe" must be a string',
  CLASSE_MIN = '422|"classe" length must be at least 3 characters long',
  LEVEL_REQUIRED = '400|"level" is required',
  LEVEL_NUMBER_REQUIRED = '422|"level" must be a number',
  LEVEL_MIN = '422|"level" must be greater than or equal to 1',
  PASSWORD_REQUIRED = '400|"password" is required',
  PASSWORD_STRING_REQUIRED = '422|"password" must be a string',
  PASSWORD_MIN = '422|"password" length must be at least 8 characters long',
}

export default UserMessages;
