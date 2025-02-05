const {expect} = require("@playwright/test");
exports.ConfigureInspections = class ConfigureInspectionsPage {

    constructor(page) {
        this.page = page;
        this.configureInspectionsPageTitle = page.locator("//div[@class='page-name']//span[1]");
        this.communityList = page.locator('#b3-Community');
        this.unitTypeList = page.locator('#b3-UnityType');
        this.formsList = page.locator('#b3-InspetionForm');
        this.addButton = page.getByRole('button', {name: 'Add'});
        this.newItemNameField = page.locator('.form-control.OSFillParent[aria-required="true"]');
        this.availabilityCheckbox = page.locator("//input[@class='form-control OSFillParent' and @aria-required='true']/following::input[1]");
        this.descriptionField = page.locator("//input[@class='form-control OSFillParent' and @aria-required='false']");
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.successMessage = page.locator('.feedback-message-text');
    }

    async assertOnConfigureInspectionPageTitle() {
        await expect(await this.configureInspectionsPageTitle).toContainText('inspections');

    }

    async selectCommunity() {
        await this.communityList.selectOption({label: 'TROJENA'});
    }

    async selectUnitType() {
        await this.unitTypeList.selectOption({label: 'C31'});
    }

    async selectForm(label) {
        await this.formsList.selectOption({label: label});
    }

    async clickOnAddButton() {
        await this.addButton.click();
    }

    async assertNewFormIsInitiated() {
        await expect(await this.newItemNameField).toBeVisible();
    }

    async enterNewFormData(formData) {
        await this.newItemNameField.fill(formData);
        await this.availabilityCheckbox.click();
        await this.descriptionField.fill(formData);
    }

    async clickOnSubmitButton() {
        await this.submitButton.click();
    }

    async assertNewFormIsCreated() {
        await expect(await this.successMessage.textContent()).toContain('added successfully');
    }
}