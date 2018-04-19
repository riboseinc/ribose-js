require("../test-helper");

describe("Ribose", function(){
  describe("initialization", function(){
    it("initializes with default properties", function(){
      let ribose = require("../../lib/ribose");

      expect(ribose.api_host).to.eq("https://www.ribose.com/api")
    });
  });
});
