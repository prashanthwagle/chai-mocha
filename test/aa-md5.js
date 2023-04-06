var promiseMd5 = require("../promise-md5");
var expect = require("chai").expect;

// Delay running the tests until after 5s
// this will be useful if you run `npm test -- --delay`
/* 
setTimeout(function () {
  run();
}, 5000);
*/

describe("#aaMd5()", function () {
  context("with string argument", function () {
    it("should compute MD5 hash", async function () {
      // use await to wait until the promise is fulfilled
      var hash = await promiseMd5("prashanth");

      // add some assertions
      expect(hash)
        .to.be.a("string")
        .that.matches(/^[a-f0-9]{32}$/)
        .and.equal("c2da11b73b17d7e4e310d8a8d744a49c");
    });
  });

  context("with non-string argument", function () {
    it("should throw an error", async function () {
      await promiseMd5("12345").catch(function (err) {
        // add an assertion to check the error
        expect(function () {
          throw err;
        }).to.throw(
          TypeError,
          "The “data” argument must be of type string or an instance of Buffer, TypedArray, or DataView"
        );
      });
    });
  });
});

describe("#pendingTest()", function () {
  // a pending test
  it("sshould write a test here");
});
