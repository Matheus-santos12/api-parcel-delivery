import { app } from "@/app";
import request from "supertest";

describe("UsersController", () => {
  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Jhollyfer",
      email: "jhollyfer@example.com",
      password: "password1234",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Jhollyfer");
  });
});
