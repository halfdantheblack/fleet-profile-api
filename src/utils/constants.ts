import { Constants } from "../api/interfaces";

export const constants: Constants = {
  // HTTP Status Codes
  ACCEPTED: 202,
  BAD_GATEWAY: 502,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  CREATED: 201,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  OK: 200,
  PAYMENT_REQUIRED: 402,
  PRECONDITION_FAILED: 412,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TOO_LONG: 413,
  REQUEST_URI_TOO_LONG: 414,
  SERVICE_UNAVAILABLE: 503,
  TOO_MANY_REQUESTS: 429,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,

  // API Defaults
  ROLES: ['user', 'admin'],
  ONLY_ADMIN_ROLES: ['user'],
  ALLOWES_ROLES: ['user', 'admin'],
  ADDRESS_TYPE: ["permanent", "current", "emergency"],
  AUTH2FACT_TYPE: ["NONE", "QUESTIONNAIRE", "AUTHCODE", "CAPTCHA"],
  AUTH_CODE_TYPE: ["EMAIL", "PHONE"],
  CAPTCHA_TYPE: ["IMAGE", "MATH"],
  GENDER: ["male", "female", "other"],
  STATUS: ["active", "terminated", "resigned", "retired"],
  ADMIN: 'admin',
  LOGGED_IN: 'logged_in',
  USER: 'user',
  DEFAULT_IMAGE: 'default.jpg',

  // Messages
  NO_RECORD_FOUND: 'No record found for given details',
  VALIDATION_ERROR: 'Validation Error',
  INVALID_CREDENTIALS: 'Invalid Credentials, Please check and try again',
  EMAIL_EXIST: 'Email is already in use by another account',
  INVALID_FILE_TYPE: 'Invalid file type',
  USER_NOT_AUTHERIZED: 'user is not autherizedA',
};