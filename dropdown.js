const { chromium } = require('playwright');

( async() => {
//    function code
    const browser = await chromium.launch({headless: false, slowMo: 500});
    const page = await  browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    // value
    // await dropdown.selectOption({value: '1'});
    //label
    // await dropdown.selectOption({label: 'Option 2'});
    //index
    await dropdown.selectOption({index: 2});
    const availableOption = await dropdown.$$('option');
    for (let i = 0 ; i < availableOption.length; i++){
        console.log(await availableOption[i].innerText());
    }
    await browser.close();
})();