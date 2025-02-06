const {expect} = require("@playwright/test");
exports.MainMenu = class MainMenuPage {

    constructor(page) {
        this.page = page;
        this.expandMenuButton = page.locator('.menu-icon');
        this.mainMenuTitle = page.locator('.side-menu-top-logo > span');
        this.configurationsTab = page.locator("//div[@id='b2-b30-Menu']")
        this.configureInspectionsTab = page.getByText('Configure inspections');
        this.welcomeFeature_tab=page.locator('//span[text()="Welcome Features"]')

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

    async openWelcomeFeaturePage(){
        await this.configurationsTab.click();
        await this.welcomeFeature_tab.click();
    }
}