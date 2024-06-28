const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return Hello, Jenkins CI/CD with Node.js!", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello, Jenkins CI/CD with Node.js!", done);
  });
});
