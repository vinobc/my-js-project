const request = require("supertest");
const { app, server } = require("../app");

describe("GET /", () => {
  let testServer;

  beforeAll(() => {
    const PORT = 3001; // Use a different port for testing
    testServer = app.listen(PORT, () => {
      console.log(`Test server is running on port ${PORT}`);
    });
  });

  afterAll((done) => {
    testServer.close(done); // Ensure the server is closed after tests
  });

  it("should return Hello, Jenkins CI/CD with Node.js!", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello, Jenkins CI/CD with Node.js!", done);
  });
});
