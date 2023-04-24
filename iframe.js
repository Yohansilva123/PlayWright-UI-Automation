const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await  browser.newPage();
    await page.goto('https://demoqa.com/frames');

    const frame = await page.frame({url: /\/sample/});
    const text = await frame.$('#sampleHeading');
    console.log(await text.innerText());
    await browser.close();
})();