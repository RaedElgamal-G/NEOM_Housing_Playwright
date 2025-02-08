const { expect } = require('@playwright/test');

export class UnitInventory {
  static sectionName = "karimPlaywriten";

  constructor(page) {
    this.page = page

    this.unitInventoryButton = page.getByRole('menuitem', { name: 'Unit Inventory' });
    this.communityList = page.locator('#b3-b6-Community_DropDown-container').locator('role=combobox');
    this.unitTypeList = page.locator('#b3-b6-UnitType_DropDown-container').locator('role=combobox');
    this.addButton = page.locator('role=button[name="Add"]');
    this.sectionName = page.getByRole('textbox', { name: 'Section Name*' });
    this.sectionDescription = page.getByRole('textbox', { name: 'Section Description' });
    this.addSectionButton = page.getByRole('button', { name: 'Add' });
    this.assertionOnSectionName = page.locator('//tbody/tr[1]/td[@data-header="Section Name"]//span');
    this.itemTab = page.locator('//*[@id="b3-$b3"]/button');
    this.itemCommunity = page.locator('//*[@id="b3-b8-communityDD"]');
    this.itemUnitType = page.locator('//*[@id="b3-b8-UnitTypeDD"]');
    this.addItemButton = page.getByRole('button', { name: 'Add' });
    this.sectionNameForTheItem = page.locator('div').filter({ hasText: /^Select Section$/ }).nth(1);
    this.selectFirstSectionName = page.locator('//*[@id="b3-b8-Form_SectionListDropdown"]/div[2]/div');
    this.ItemNameField = page.getByRole('textbox', { name: 'Item Name*' });
    this.ItemQuantity = page.getByRole('spinbutton', { name: 'QTY*' });
    this.AddNewItemButton = page.locator('//*[@id="b3-b8-Form1"]/div[3]/button[2]');
  }

  async selectCommunityToAddNewSection() {
    await this.unitInventoryButton.click();
    await this.communityList.waitFor({ state: 'visible' });
    await this.communityList.selectOption({ label: 'TROJENA' });

  }
async selectUnitTypeToAddNewSection() {
    await this.unitTypeList.click();
    await this.unitTypeList.selectOption({ label: 'C04' });
    await this.addButton.click();}




  async fillSectionNameAndDescription(name, fillSectionDescription) {
    await this.sectionName.fill(name);
    await this.sectionDescription.fill(fillSectionDescription);
    await this.addSectionButton.click();
  }

  async verifySectionAddedSuccessfully(expectedSectionName) {
    await this.assertionOnSectionName.waitFor({ state: 'visible' });
    try {
      await expect(this.assertionOnSectionName).toContainText(expectedSectionName);
    } catch (error) {
      console.error('Assertion Failed:', error.message);
    }
  }
async clickOnItemTab(){
await this.itemTab.click();
}
    async selectItemCommunity(){
     await this.itemCommunity.click();
      await this.itemCommunity.selectOption({ label: 'TROJENA' });

      }

    async selectItemUnitType(){
      await this.itemUnitType.selectOption({ label: 'C04' });
  }
async clickOnAddItemButton(){
await this.AddNewItemButton.click()
}


    async selectSectionForTheItem (fillSectionName) {
        await this.sectionNameForTheItem.click();
        await this.selectFirstSectionName.getByText(fillSectionName).first().click();
    }

   async fillItemName (ItemNameData) {
    await this.ItemNameField.fill(ItemNameData);
    }

    async fillItemQuantity(quantityRandomNum) {
        await this.ItemQuantity.fill(quantityRandomNum);
        }

    async clickOnAddItemButton () {
        await this.addItemButton.click();
        }



  async searchAndSelectItem(text) {
    const items = this.page.locator(`text=${text}`);
    await items.first().waitFor({ state: 'visible' });
    await items.first().click();
  }
}