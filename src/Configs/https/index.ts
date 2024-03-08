export enum HTTPS_STATUS {
  SUCCESS = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export const HTTPS_SUCCESS = {
  [HTTPS_STATUS.SUCCESS]: {
    status: HTTPS_STATUS.SUCCESS,
    message: 'success',
  },
  [HTTPS_STATUS.CREATED]: {
    status: HTTPS_STATUS.CREATED,
    message: 'created',
  },
  [HTTPS_STATUS.ACCEPTED]: {
    status: HTTPS_STATUS.ACCEPTED,
    message: 'accepted',
  },
  [HTTPS_STATUS.NO_CONTENT]: {
    status: HTTPS_STATUS.NOT_FOUND,
    message: 'no content',
  },
};

export const HTTPS_ERROR = {
  [HTTPS_STATUS.BAD_REQUEST]: {
    status: HTTPS_STATUS.BAD_REQUEST,
    message: 'bad request',
  },
  [HTTPS_STATUS.UNAUTHORIZED]: {
    status: HTTPS_STATUS.UNAUTHORIZED,
    message: 'unauthorized',
  },
  [HTTPS_STATUS.FORBIDDEN]: {
    status: HTTPS_STATUS.FORBIDDEN,
    message: 'forbidden',
  },
  [HTTPS_STATUS.NOT_FOUND]: {
    status: HTTPS_STATUS.NOT_FOUND,
    message: 'not found',
  },
  [HTTPS_STATUS.METHOD_NOT_ALLOWED]: {
    status: HTTPS_STATUS.METHOD_NOT_ALLOWED,
    message: 'method not allowed',
  },
  [HTTPS_STATUS.INTERNAL_SERVER_ERROR]: {
    status: HTTPS_STATUS.INTERNAL_SERVER_ERROR,
    message: 'internal server error',
  },
  [HTTPS_STATUS.NOT_IMPLEMENTED]: {
    status: HTTPS_STATUS.NOT_IMPLEMENTED,
    message: 'not implemented',
  },
  [HTTPS_STATUS.BAD_GATEWAY]: {
    status: HTTPS_STATUS.BAD_GATEWAY,
    message: 'bad gateway',
  },
  [HTTPS_STATUS.SERVICE_UNAVAILABLE]: {
    status: HTTPS_STATUS.SERVICE_UNAVAILABLE,
    message: 'service unavailable',
  },
  [HTTPS_STATUS.GATEWAY_TIMEOUT]: {
    status: HTTPS_STATUS.GATEWAY_TIMEOUT,
    message: 'geteway timeout',
  },
};

export const GROUPS_HTTPS = {
  ...HTTPS_SUCCESS,
  ...HTTPS_ERROR,
};
