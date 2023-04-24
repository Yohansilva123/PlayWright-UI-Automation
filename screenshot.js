const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch({headless: true, slowMo: 100});
    const page = await  browser.newPage();
    await page.goto('https://applitools.com/');
    //take screenshot
    await page.screenshot({path: 'screenshots/screenshot.png'});
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'screenshots/logo.png'});
    await page.screenshot({path: 'screenshots/fullPage.png', fullPage: true});
    await browser.close();
})();