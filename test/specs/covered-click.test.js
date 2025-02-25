const path = require("path");

describe("WebDriver BiDi Click Interception", () => {
  const testPage = `file://${path.resolve(
    __dirname,
    "../resources/test-page.html"
  )}`;

  beforeEach(async () => {
    await browser.url(testPage);
  });

  it("should click an uncovered button", async () => {
    const button = await $("#bottom-button");
    const overlay = await $("#overlay");

    if (await overlay.isExisting()) {
      await browser.execute(() => document.querySelector("#overlay")?.remove());
      await browser.waitUntil(async () => !(await overlay.isDisplayed()), {
        timeout: 5000,
      });
    }

    await button.click();
    expect(await $("#event-log").getText()).toContain("Bottom button clicked!");
  });

  it("should fail to click a covered button", async () => {
    let error;
    try {
      await $("#bottom-button").click();
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.message).toMatch(/click intercepted|not clickable/i);
    expect(await $("#event-log").getText()).not.toContain(
      "Bottom button clicked!"
    );
  });

  it("should detect overlay click", async () => {
    await $("#overlay").click();
    expect(await $("#event-log").getText()).toContain("Overlay clicked!");
  });
});
