// @ts-check
//classes
import {test} from '@playwright/test'
import {Login} from "../pages/loginPage";
import {MainMenu} from "../pages/mainMenu";
import {ConfigureInspections} from "../pages/configureInspectionsPage";
import {Header} from "../pages/header";

//importing roles json file
const roles = require('../testData/roles.json').roles;

//import randomData function
import {generateRandomData} from "../utilities/randomData";

test.describe("configureInspectionsTestCases", () => {

    let loginPage;
    let mainMenu;
    let configureInspectionsPage;
    let pageHeader;
    let formData;

    test.beforeEach(async ({page}) => {
        //pages
        loginPage = new Login(page)
        mainMenu = new MainMenu(page)
        configureInspectionsPage = new ConfigureInspections(page)
        pageHeader = new Header(page)
        formData = generateRandomData("Raed")
        await loginPage.goto();

    })

    test('Create a Pre-departure Inspection Form', async ({}) => {

        await loginPage.assertOnLoginPageTitle();
        await loginPage.loginWithValidCredentials(roles.admin.email, roles.admin.password);
        await pageHeader.assertOnUserTitle("Housing Super Admin");
        await mainMenu.clickOnExpandMenuButton();
        await mainMenu.asserOnMainMenuTitle();
        await mainMenu.gotoConfigureInspectionsTab();
        // await configureInspectionsPage.assertOnConfigureInspectionPageTitle();
        await configureInspectionsPage.selectCommunity();
        await configureInspectionsPage.selectUnitType();
        await configureInspectionsPage.selectForm("Pre-departure Inspection Form");
        await configureInspectionsPage.clickOnAddButton()
        await configureInspectionsPage.assertNewFormIsInitiated();
        await configureInspectionsPage.enterNewFormData(formData);
        await configureInspectionsPage.clickOnSubmitButton();
        await configureInspectionsPage.assertNewFormIsCreated();
    })

    test('Create a RFO Inspection Form', async ({}) => {

        await loginPage.assertOnLoginPageTitle();
        await loginPage.loginWithValidCredentials("housing.superadmin@gizasystems.com", "soWLMzUqfx");
        await pageHeader.assertOnUserTitle("Housing Super Admin");
        await mainMenu.clickOnExpandMenuButton();
        await mainMenu.asserOnMainMenuTitle();
        await mainMenu.gotoConfigureInspectionsTab();
        // await configureInspectionsPage.assertOnConfigureInspectionPageTitle();
        await configureInspectionsPage.selectCommunity();
        await configureInspectionsPage.selectUnitType();
        await configureInspectionsPage.selectForm("RFO Inspection");
        await configureInspectionsPage.clickOnAddButton()
        await configureInspectionsPage.assertNewFormIsInitiated();
        await configureInspectionsPage.enterNewFormData(formData);
        await configureInspectionsPage.clickOnSubmitButton();
        await configureInspectionsPage.assertNewFormIsCreated();

    })

})


