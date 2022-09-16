import supertest from "supertest";
import { prismaMock } from "./lib/prisma/client.mock";

import app from "./app";

const request = supertest(app);

test("POST /planets", async () => {
    const planet = {
        name: "Mercury",
        description: null,
        diameter: 1234,
        moons: 12,
        createdAt: "2022-09-16T11:06:04.890Z",
        updatedAt: "2022-09-16T11:05:26.249Z",
    };

    const response = await request
        .post("/planets")
        .send(planet)
        .expect(201)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual(planet);
});
