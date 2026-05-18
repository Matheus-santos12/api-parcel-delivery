import { hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class UserController {
  async create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(8),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    const hashedPassword = await hash(password, 8);
    return response.json({ message: "Ok!", hashedPassword });
  }
}
