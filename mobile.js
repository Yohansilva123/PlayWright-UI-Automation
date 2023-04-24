const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];

( async() => {
//    function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const context = await browser.newContext({
        ...iPhone, // spread operator unpacks iPhone const
        permissions: ['geolocation'], // allows geolocation
        geolocation: { latitude: 19.432608, longitude: -99.133209 }, // Mexico City coordinates
        locale: 'fr-FR' // French from France
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000); // timeout of 5000ms only for debugging purposes
    await browser.close();
})();