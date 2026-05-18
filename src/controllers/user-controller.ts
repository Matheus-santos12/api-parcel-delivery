import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class UserController {
  create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(8),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    return response.json({ message: "Ok!" });
  }
}
