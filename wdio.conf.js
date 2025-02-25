exports.config = {
  runner: "local",
  specs: ["./test/specs/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--enable-bidi-protocol"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
