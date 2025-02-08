const {expect} = require("@playwright/test");
exports.MainMenu = class MainMenuPage {

    constructor(page) {
        this.page = page;
        this.expandMenuButton = page.locator('.menu-icon');
        this.mainMenuTitle = page.locator('.side-menu-top-logo > span');
        this.configurationsTab = page.locator("//div[@id='b2-b30-Menu']")
        this.configureInspectionsTab = page.getByText('Configure inspections');
        ////Karim\\\\
        this.menuButton = page.locator ("//*[@class='menu-icon']");
        this.configButton=page.locator ("//span[@class='hidden-text' and text()='Configuration']");
    }

    async clickOnExpandMenuButton(){
        await this.expandMenuButton.click();
    }

    async asserOnMainMenuTitle(){
        await expect(await this.mainMenuTitle.textContent()).toBe("NEOM")
    }

    async gotoConfigureInspectionsTab(){
        await this.configurationsTab.click();
        await expect(await this.configureInspectionsTab).toBeVisible()
        await this.configureInspectionsTab.click();
    }
    async OpenSideMenu(){

     await this.expandMenuButton.click();
     await this.configurationsTab.click();



     }
}