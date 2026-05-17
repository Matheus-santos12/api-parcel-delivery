class AppError {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 4000) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
