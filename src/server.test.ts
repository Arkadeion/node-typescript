import supertest from "supertest";
import { prismaMock } from "./lib/prisma/client.mock";

import app from "./app";

const request = supertest(app);

test("GET /planets", async () => {
    const planets = [
        {
            id: 1,
            name: "Mercury",
            description: null,
            diameter: 1234,
            moons: 12,
            createdAt: "2022-09-16T11:06:04.890Z",
            updatedAt: "2022-09-16T11:05:26.249Z",
        },
        {
            id: 2,
            name: "Venus",
            description: null,
            diameter: 2345,
            moons: 2,
            createdAt: "2022-09-16T11:13:14.696Z",
            updatedAt: "2022-09-16T11:13:00.768Z",
        },
    ];

    // @ts-ignore
    prismaMock.planet.findMany.mockResolvedValue(planets);

    const response = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual(planets);
});
