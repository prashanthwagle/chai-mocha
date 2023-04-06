//1. Including and excluding tests

// Tests in this suite will run
describe.only("#flattenArray()", function () {
  it("should flatten array", function () {});
});

// Tests in this suite will not run
describe("#mergeArray()", function () {
  it("should merge two arrays", function () {});
});

describe.only("#flattenArray()", function () {
  // This test will run
  it.only("should flatten array", function () {});

  // This test will not run
  it("should recursively flatten array", function () {});
});

describe.only("#mergeArray()", function () {
  // This test is skipped at runtime for production environment
  // In production, it will not run and will be marked as pending

  it("should merge two arrays", function () {
    if (process.env.NODE_ENV === "production") {
      return this.skip();
    }
  });
});

//2. Retrying Mocha tests

describe("test medium site", function () {
  // all failed tests in this suite will only be retried 2 times
  this.retries(2);

  it("should load medium homepage", function () {
    // can only retry this test 5 times
    this.retries(5);

    cy.visit("https://medium.com");
  });
});

//3. Slow tests with Mocha

describe("slow test", function () {
  // Tests will be considered slow after 1 second elapses
  this.slow(1000);

  // Completes after the specified 1 second elapses
  it("should be complete in a second", function (done) {
    setTimeout(done, 1500);
  });

  // Completes immediately
  it("should be complete instantly", function () {});
});

//4. Timeouts
describe("some time-consuming operation", function () {
  // set a 5 seconds timeout for this suite
  this.timeout(5000);

  before("some long setup", function (done) {
    // set a hook-level timeout
    this.timeout(2500);

    setTimeout(done, 2250);
  });

  it("should take less than 200ms", function (done) {
    // set a test-level timeout
    this.timeout(200);

    setTimeout(done, 150);
  });
});

describe("some time-consuming operation", function () {
  // disable timeout for this suite
  this.timeout(0);

  // test that takes a long time to complete
  it("should take a long time", function (done) {
    setTimeout(done, 10000);
  });
});

/**
 Other concepts
 1. Mocha CLI options
 2. Mocha in the browser
 */
