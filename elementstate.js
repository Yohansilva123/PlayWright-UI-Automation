const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch();
    const page = await  browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');
    //print element state
    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const maleCheck = await page.$('#gender-radio-1');
    const submitButton = await page.$('#submit');

    console.log(await firstName.isVisible());
    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEnabled());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await sportsCheck.isEnabled());
    console.log(await maleCheck.isChecked());
    console.log(await maleCheck.isHidden());
    console.log(await submitButton.isHidden());
    console.log(await submitButton.isDisabled());
    console.log(await submitButton.isVisible());

    if (await submitButton.isVisible()){
        await page.screenshot({path: 'screenshot.png'});
    }

    await browser.close();
})();