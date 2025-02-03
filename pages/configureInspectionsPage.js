const {expect} = require("@playwright/test");
exports.ConfigureInspections = class ConfigureInspectionsPage {

    constructor(page) {
        this.page = page;
        this.configureInspectionsPageTitle = page.locator('.page-name span');
        this.communityList = page.locator('#b3-Community');
        this.unitTypeList = page.locator('#b3-UnityType');
        this.formsList = page.locator('#b3-InspetionForm');
        this.addButton = page.getByRole('button', {name: 'Add'});
        this.newItemName = page.locator('.form-control.OSFillParent[aria-required="true"]');
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.successMessage = page.locator('.feedback-message-text');
    }

    async assertOnConfigureInspectionPageTitle() {
        await expect(await this.configureInspectionsPageTitle).toBeVisible();

    }

    async selectCommunity() {
        await this.communityList.selectOption({label: 'TROJENA'});
    }

    async selectUnitType() {
        await this.unitTypeList.selectOption({label: 'C31'});
    }

    async selectForm(label) {
        await this.formsList.selectOption({label:label});
    }

    async clickOnAddButton() {
        await this.addButton.click();
    }

    async assertNewFormIsInitiated() {
        await expect(await this.newItemName).toBeVisible();
    }

    async enterNewFormData(formTitle) {
        await this.newItemName.fill(formTitle);
    }

    async clickOnSubmitButton() {
        await this.submitButton.click();
    }

    async assertNewFormIsCreated() {
        await expect(await this.successMessage.textContent()).toContain('added successfully');
    }
}