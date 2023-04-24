const { firefox } = require('playwright');

( async() => {
//    function code
    const browser = await firefox.launch({headless: false, slowMo: 100});
    const page = await  browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    // check the second check box
    const checks = await page.$$('#main div:nth-child(1) input[type="checkbox"]');
    await checks[1].check();
    await checks[0].uncheck();

    //check the first radio button
    const checkRadio = await page.$$('#main div:nth-child(1) input[type="radio"]');
    await checkRadio[1].check();
    await checkRadio[0].check();

    await browser.close();
})();