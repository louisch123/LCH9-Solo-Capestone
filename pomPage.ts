import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
export class writersBlockTest{
    driver: WebDriver;
    url: string =  "https://www.thewritersblock.org/";
    homePage: By = By.xpath('//div[@id="root"]')
    //login:By = By.xpath('//button[@class="ant-btn ant-btn-primary ant-popover-open hide"]')
    login: By = By.xpath('(//span[text()= "Login"])[2]')
    addEmail: By = By.xpath('//input[@id="email"]')
    addPswd: By = By.xpath('//input[@id="password"]')
    pswdEmailError: By = By.xpath('//div[@role="alert"]') // Alert Messages: Email- "Please input your email address", Pswd - "Password Required"
    errorP: By = By.xpath('//div[text()="password required. "]') //"Password Required"//
    errorE: By = By.xpath('(//div[@class="ant-form-item-explain ant-form-item-explain-error"])[1]')//"Please input your email address"//
    loginBtn: By = By.xpath('(//button[@type="submit"])[1]')
    //Second Test Selectors
    searchBar: By = By.xpath('(//input[@class="ant-input ant-input-lg"])[2]')// Title to search "Seriously I'm Kidding"
    filterArrow: By = By.xpath('//span[@class="ant-select-arrow"]')
    searchOptionsMenu: By = By.xpath('(//div[@class="ant-select-item-option-content"])[2]') //Title
    selectedOption: By = By.xpath('//span[@class="ant-select-selection-item"]')//Title 
    searchBtn: By = By.xpath('//button[@class="ant-btn ant-btn-lg ant-btn-icon-only ant-input-search-button"]')
    //Third Test Selectors
    browseMenu: By= By.xpath('(//li[@class="ant-menu-item ant-menu-item-only-child"])[2]')
    checkedBox: By = By.xpath('//label[@class="ant-checkbox-wrapper ant-checkbox-wrapper-checked"]')
    uncheckedBox: By = By.xpath('//label[@class="ant-checkbox-wrapper"]')
    formatUncollapse:By = By.xpath('(//div[@class="ant-collapse-item"])[2]')
    formatCollapse: By = By.xpath('(//div[@class="ant-collapse-item ant-collapse-item-active"])[2]')


    constructor(driver: WebDriver){
        this.driver =driver
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.homePage))
    }
    async click (elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
        
    }
    async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText (elementBy){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async setInput(elementBy: By, keys:any):Promise<void>{
        let input = await this.driver.findElement(elementBy)
        await input.click()
        await input.clear()
        return input.sendKeys(keys)
    }
    async getAttribute(elementBy: By, attribute: string) {
            return (await this.getElement(elementBy)).getAttribute(attribute)
        }
    async getElement(elementBy: By): Promise<WebElement>{
        await this.driver.wait(until.elementsLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    };



};



 

    
    
