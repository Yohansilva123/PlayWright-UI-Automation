const BasePage = require('./Base.page');

class HomePage extends BasePage{

    constructor(page){
        super(page)

    //    locators
        this.loggedUserTxt = '.logged-user-name';
        this.balanceText = '.balance-value';
    }

    async getBalance(balanceType){
        let balanceArray = await this.page.$$(this.balanceText);
        if (balanceType == 'total'){
           return (await balanceArray[0].$('span')).innerText();
        }
        else if(balanceType == 'credit'){
            return (await balanceArray[1]).innerText();
        }
        else{
            return (await balanceArray[2]).innerText();
        }
    }

    async getUserName(){
        let user = await this.page.$(this.loggedUserTxt);
        return await user.innerText();
    }

    async navigate(){
        await super.navigate('app.html');
    }
}
module.exports = HomePage;