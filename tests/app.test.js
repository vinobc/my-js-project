const request = require("supertest");
const { app, server } = require("../app");

describe("GET /", () => {
  afterAll((done) => {
    server.close(done); // Ensure the server is closed after tests
  });

  it("should return Hello, Jenkins CI/CD with Node.js!", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello, Jenkins CI/CD with Node.js!", done);
  });
});
