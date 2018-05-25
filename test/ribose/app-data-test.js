require("../test-helper");

describe("App Data", () => {
  describe(".all", () => {
    it("retrieves the list of app data", () => {
      app_data = ribose.app_data.all();
      expect(app_data.misc.locale).to.equal("en")
    });
  });
});

