const { chromium } = require('playwright');

( async() => {
    // launching browser
    const browser = await chromium.launch({headless:false, slowMo: 100});
    // creating a page inside context
    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordings"
        }
    });
    const page = await context.newPage();
    // navigating to site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    // click on button
    await page.click('button');
    // waiting for loading animation to appear
    await page.waitForSelector('#loading');
    // and disappear
    await page.waitForSelector('#loading', { state: 'hidden' });

    await page.waitForTimeout(100);
    await browser.close();
})();