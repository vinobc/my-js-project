const request = require("supertest");
const { app } = require("../app");

let server;

beforeAll((done) => {
  const PORT = process.env.TEST_PORT || 3001;
  server = app.listen(PORT, () => {
    console.log(`Test server is running on port ${PORT}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("should return Hello, Jenkins CI/CD with Node.js!", (done) => {
    request(`http://localhost:${process.env.TEST_PORT || 3001}`)
      .get("/")
      .expect(200)
      .expect("Hello, Jenkins CI/CD with Node.js!", done);
  });
});
