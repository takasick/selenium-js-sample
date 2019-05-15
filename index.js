const { Builder, Capabilities, By, Key, until } = require('selenium-webdriver');

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {
    args: [
        // '--headless',
        '--window-size=1024,768'
    ]
});

(async function () {
  let driver = await new Builder().withCapabilities(capabilities).build();
  try {
    await driver.get(
      "https://google.com"
    );
  } finally {
    await driver.quit();
  }
})();