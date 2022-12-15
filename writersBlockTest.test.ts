import { Builder, By, Capabilities,until,WebDriver,WebElement, } from "selenium-webdriver";
import {writersBlockTest} from "./pomPage";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const writersPage = new writersBlockTest(driver);

const results:  By = By.xpath('//input[@class="ant-input ant-input-lg"])[2]')

describe ("writers block website", () => {
    beforeEach(async ()=> {
        await writersPage.navigate();
    })
    afterAll(async ()=> {
        await driver.quit();
    })

    test ("login", async ()=>{
        await driver.sleep(5000);
        await driver.findElement(writersPage.login).click();
        await driver.findElement(writersPage.addEmail).click();
        await driver.findElement(writersPage.addEmail).clear();
        await driver.findElement(writersPage.addEmail).sendKeys("louisch123@yahoo.com");
        await driver.findElement(writersPage.addPswd).click();
        await driver.findElement(writersPage.addPswd).clear();
        await driver.findElement(writersPage.addPswd).sendKeys("L/*mI0Dde");
        //await driver.findElement(menPage.errorP).sendKeys("password required. ");
        await driver.findElement(writersPage.loginBtn).click();
        //let errorMsg= await menPage.getText(menPage.errorP)
        //expect(errorMsg).toContain("password required. ");
    

    });

   test ("search bar title", async () =>{
        await driver.sleep(5000);
        await driver. findElement(writersPage.filterArrow).click();
        await driver.findElement(writersPage.searchOptionsMenu).click();
        await driver.findElement(writersPage.searchBar).click();
        await driver.findElement(writersPage.searchBar).sendKeys("Seriously I'm Kidding\n");
        await driver.sleep(5000);
        

    });

    test ("Browse Feature", async () =>{
        await driver.sleep(5000);
        await driver.findElement(writersPage.browseMenu).click();
        await driver.sleep(5000);
        await driver.findElement(writersPage.checkedBox).click();
        await driver.findElement(writersPage.formatCollapse).click();
        await driver.findElement(writersPage.formatUncollapse).click();
    });

    test ("Subject and Topic Selection" , async () => {
        await driver.sleep(5000);
        await driver.findElement(writersPage.browseMenu).click();
       // await driver.findElement(writersPage.subjectCollapse).click();
        await driver.sleep(5000);
        await driver.findElement(writersPage.fictionSelection).click();
        await driver.sleep(5000);
        await driver.findElement(writersPage.fictionTopic).click();
        await driver.sleep(5000);
        await driver.findElement(writersPage.subjectUncollapse).click();
    });
});