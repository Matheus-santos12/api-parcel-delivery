import { app } from "@/app";
import request from "supertest";

describe("SessionsController", () => {
  let user_id: string;

  it("should authenticate a and get access token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Auth test Jhollyfer",
      email: "auth_testjhollyfer@example.com",
      password: "password1234",
    });

    user_id = userResponse.body.id;

    const sessionResponse = await request(app).post("/sessions").send({
      email: "auth_testjhollyfer@example.com",
      password: "password1234",
    });

    expect(sessionResponse.status).toBe(200);
    expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
