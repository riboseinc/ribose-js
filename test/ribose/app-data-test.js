require("../test-helper");
const ribose = require("../../lib/ribose")();

describe("App Data", () => {
  describe(".all", () => {
    it("retrieves the list of app data", () => {
      ribose.authenticate({token: "secret-token", email: "api@ribose.test" })
      app_data = ribose.appData.getAll({actions: "hello"});

      console.log(app_data);

      expect(app_data.misc.locale).to.equal("en")
    });
  });
});

