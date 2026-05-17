import { NextFunction, Request, Response } from "express";

export class UserController {
  create(request: Request, response: Response, next: NextFunction) {
    return response.json({ message: "Ok!" });
  }
}
