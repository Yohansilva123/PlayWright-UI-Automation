const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch({headless: false, slowMo: 500});
    const page = await  browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    //click on alert button
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#alertButton');

    //click on prompt button
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('this is my text');
    });
    await page.click('#promtButton');
    await browser.close();
})();