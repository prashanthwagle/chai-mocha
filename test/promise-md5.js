var promiseMd5 = require("../promise-md5");
var expect = require("chai").expect;

//Promise Refresher: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

describe("#promiseMd5()", function () {
  context("with string argument", function () {
    it("should compute MD5 hash", function () {
      return promiseMd5("prashanth").then(function (hash) {
        // add some assertions
        expect(hash)
          .to.be.a("string")
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal("c2da11b73b17d7e4e310d8a8d744a49c");
      });
    });
  });

  context("with non-string argument", function () {
    it("should throw an error", function () {
      return promiseMd5("12345").catch(function (err) {
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
