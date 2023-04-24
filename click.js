const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await  browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    // type code
    const email = await page.$('#user-name');
    const password = await page.$('#password');
    const submit = await page.$('#login-button');
    await email.type('standard_user', {delay: 50});
    await password.type('secret_sauce');
    await submit.click();
    await page.click('#item_0_img_link > img');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await browser.close();
})();