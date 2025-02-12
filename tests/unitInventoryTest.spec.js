const { test, expect } = require('@playwright/test');
const { Login } = require('../pages/loginPage');
const { MainMenu } = require('../pages/mainMenu'); // Use require for consistency
const { UnitInventory } = require('../pages/UnitInventory');
import {Header} from "../pages/header";
import {generateRandomData} from "../utilities/randomData";
const { generateDataRandomly, generateRandomNumbers } = require('../utilities/randomData');
const roles = require('../testData/roles.json').roles;
let pageHeader ;
let mainMenu;
let unitInventory;
let itemNameData;
let quantityRandomNum;
let fillSectionName ;
let fillSectionDescription ;

test.beforeEach(async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto();
  pageHeader = new Header(page)
  await loginPage.loginWithValidCredentials(roles.admin.email, roles.admin.password);
  mainMenu = new MainMenu(page);
  unitInventory = new UnitInventory(page);
  itemNameData = generateDataRandomly();
  quantityRandomNum = generateRandomNumbers();
  fillSectionName = generateRandomData("Karim")
  fillSectionDescription = generateRandomData("Test")
});


test('Add Item To An Existed Section From Unit Inventory’s Configurations Tab', async ({ page }) => {
  await pageHeader.assertOnUserTitle("Housing Super Admin");
  await mainMenu.OpenSideMenu()
  await unitInventory.selectCommunityToAddNewSection()
  await unitInventory.selectUnitTypeToAddNewSection()
  await unitInventory.fillSectionNameAndDescription(fillSectionName,fillSectionDescription);
  await unitInventory.verifySectionAddedSuccessfully(fillSectionName);
  await unitInventory.clickOnItemTab()
  await unitInventory.selectItemCommunity()
  await unitInventory.selectItemUnitType()
  await unitInventory.clickOnAddItemButton()
  await unitInventory.selectSectionForTheItem(fillSectionName)
  await unitInventory.fillItemName(itemNameData)
  await unitInventory.fillItemQuantity(quantityRandomNum)
  await unitInventory.clickOnAddItemButton ()

});

