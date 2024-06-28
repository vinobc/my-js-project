const request = require("supertest");
const { app } = require("../app");

let server;

beforeAll((done) => {
  const PORT = process.env.TEST_PORT || 3001; // Use a different port for testing
  process.env.PORT = PORT; // Set the process.env.PORT for the app
  server = app.listen(PORT, () => {
    console.log(`Test server is running on port ${PORT}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("should return Hello Jenkins CI/CD with Node.js!", (done) => {
    request(`http://localhost:${process.env.PORT}`)
      .get("/")
      .expect(200)
      .expect("Hello, Jenkins CI/CD with Node.js!", done);
  });
});
