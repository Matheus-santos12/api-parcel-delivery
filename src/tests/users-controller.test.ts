import { app } from "@/app";
import { prisma } from "@/database/prisma";
import request from "supertest";

describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } });
  });

  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Jhollyfer",
      email: "jhollyfer@example.com",
      password: "password1234",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Jhollyfer");

    user_id = response.body.id;
  });

  it("should throw an error if user with same email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicado Jhollyfer",
      email: "jhollyfer@example.com",
      password: "password1234",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User with same email already exists");
  });

  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Test USer",
      email: "invalid-email",
      password: "password1234",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("validation error");
  });
});
