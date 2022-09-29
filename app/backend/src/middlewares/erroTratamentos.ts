import { ErrorRequestHandler } from 'express';

const ErrorTreatments: ErrorRequestHandler = async (error, _request, response, next) => {
  if (error.statusCode) {
    response.status(error.statusCode).json({ message: error.message });
    return next();
  }
  response.status(500).json({ message: error.message });
  return next();
};

export default ErrorTreatments;
