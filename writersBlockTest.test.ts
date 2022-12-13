import { Builder, By, Capabilities,until,WebDriver,WebElement, } from "selenium-webdriver";
import {writersBlockTest} from "./pomPage";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const menPage = new writersBlockTest(driver);
const searchBar: By = By.xpath('//span[@class="ant-input-group-wrapper ant-input-group-wrapper-lg ant-input-search ant-input-search-large header_search"]')
const results:  By = By.xpath('//input[@class="ant-input ant-input-lg"])[2]')

describe ("writers block website", () => {
    beforeEach(async ()=> {
        await menPage.navigate();
    })
    afterAll(async ()=> {
        await driver.quit();
    })

    test ("login", async ()=>{
        await driver.sleep(5000);
        await driver.findElement(menPage.login).click();
        await driver.findElement(menPage.addEmail).click();
        await driver.findElement(menPage.addEmail).clear();
        await driver.findElement(menPage.addEmail).sendKeys("louisch123@yahoo.com");
        await driver.findElement(menPage.addPswd).click();
        await driver.findElement(menPage.addPswd).clear();
        await driver.findElement(menPage.addPswd).sendKeys("L/*mI0Dde");
        //await driver.findElement(menPage.errorP).sendKeys("password required. ");
        await driver.findElement(menPage.loginBtn).click();
        //let errorMsg= await menPage.getText(menPage.errorP)
        //expect(errorMsg).toContain("password required. ");
    

    });

    test ("search bar title", async () =>{
        await driver.sleep(5000);
        await driver.findElement(searchBar).sendKeys("Seriously I'm Kidding\n");
        let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain("The Child")

    });
});