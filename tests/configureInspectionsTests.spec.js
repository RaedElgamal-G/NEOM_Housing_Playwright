// @ts-check
import {test} from '@playwright/test'
import {Login} from "../pages/loginPage";
import {MainMenu} from "../pages/mainMenu";
import {ConfigureInspections} from "../pages/configureInspectionsPage";
import {Header} from "../pages/header";

  test ('Create a Pre-departure Inspection Form', async ({page}) => {

    //pages
    const loginPage =new Login(page)
    const mainMenu = new MainMenu(page)
    const configureInspectionsPage = new ConfigureInspections(page)
    const pageHeader = new Header(page)

    //flow
    await loginPage.goto();
    await loginPage.assertOnLoginPageTitle();
    await loginPage.loginWithValidCredentials("housing.superadmin@gizasystems.com","soWLMzUqfx");
    await pageHeader.assertOnUserTitle("Housing Super Admin");
    await mainMenu.clickOnExpandMenuButton();
    await mainMenu.asserOnMainMenuTitle();
    await mainMenu.gotoConfigureInspectionsTab();
    await configureInspectionsPage.assertOnConfigureInspectionPageTitle();
    await configureInspectionsPage.selectCommunity();
    await configureInspectionsPage.selectUnitType();
    await configureInspectionsPage.selectForm("Pre-departure Inspection Form");
    await configureInspectionsPage.clickOnAddButton()
    await configureInspectionsPage.assertNewFormIsInitiated();
    await configureInspectionsPage.enterNewFormData("Playwright raed Pre-departure");
    await configureInspectionsPage.clickOnSubmitButton();
    await configureInspectionsPage.assertNewFormIsCreated();
  })

  // test ('Create a RFO Inspection Form', async ({page}) => {
  //   await loginPage.assertOnLoginPageTitle();
  //   await loginPage.loginWithValidCredentials("housing.superadmin@gizasystems.com","soWLMzUqfx");
  //   await pageHeader.assertOnUserTitle("Housing Super Admin");
  //   await mainMenu.clickOnExpandMenuButton();
  //   await mainMenu.asserOnMainMenuTitle();
  //   await mainMenu.gotoConfigureInspectionsTab();
  //   await configureInspectionsPage.assertOnConfigureInspectionPageTitle();
  //   await configureInspectionsPage.selectCommunity();
  //   await configureInspectionsPage.selectUnitType();
  //   await configureInspectionsPage.selectForm("RFO Inspection");
  //   await configureInspectionsPage.clickOnAddButton()
  //   await configureInspectionsPage.assertNewFormIsInitiated();
  //   await configureInspectionsPage.enterNewFormData("Playwright raed Pre-departure");
  //   await configureInspectionsPage.clickOnSubmitButton();
  //   await configureInspectionsPage.assertNewFormIsCreated();
  //
  // })

