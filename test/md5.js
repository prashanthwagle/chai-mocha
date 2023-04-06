var md5 = require("../md5");
var expect = require("chai").expect;

/*
it('test expectation', function(done) {
// test asynchronous code
// call done() to terminate test and proceed to the next test
}
*/

describe("#md5()", function () {
  context("with string argument", function () {
    it("should compute MD5 hash", function (done) {
      md5("prashanth", function (err, hash) {
        // call the done() callback with the error if any
        // to terminate the test with an error
        if (err) return done(err);

        // add some assertions
        expect(hash)
          .to.be.a("string")
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal("c2da11b73b17d7e4e310d8a8d744a49c");

        // finally call the done() callback
        // to terminate the test
        done();
      });
    });
  });

  context("with non-string argument", function () {
    it("should throw an error", function (done) {
      md5(12345, function (err, hash) {
        // call the done() callback with the error if any
        // to terminate the test
        if (err) {
          // add an assertion to check the error

          expect(function () {
            throw err;
          }).to.throw(
            TypeError,
            `The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (12345)`
          );

          // finally call the done() callback
          // to terminate the test and return
          return done();
        }

        // call the done() callback
        // to terminate the test
        done();
      });
    });
  });
});
