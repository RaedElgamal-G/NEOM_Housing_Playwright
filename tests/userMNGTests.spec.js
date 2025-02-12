const { test, expect } = require('@playwright/test');
import {Login} from "../pages/loginPage";
import {MainMenu} from "../pages/mainMenu";
import {userManagementPage} from '../pages/userManagementPage'
import {generateRandomData} from "../utilities/randomData";

 const roles = require('../testData/roles.json').roles;


 test ('Add User in UserManagement ', async ({page}) => {

    //pages
    const loginPage =new Login(page)
    const mainMenu = new MainMenu(page)
    const userMNG =  new userManagementPage(page)
    const emailData = generateRandomData("haneen")
    //flow
    await loginPage.goto();
    await loginPage.assertOnLoginPageTitle();
    await loginPage.loginWithValidCredentials(roles.admin.email, roles.admin.password);
    await mainMenu.clickOnExpandMenuButton();
    await userMNG.gotoUserManagementTab();
    await userMNG.assertOnUsersPagePageTitle();
   await userMNG.gotoUserDetailsForm();
    await userMNG.assertOnUsersDetailsFormTitle();
    await userMNG.chooseNonNEOMEmployee();
    await userMNG.fillUserData(emailData+'@gmail.com','haniintest' ,'778377762');
    //await page.pause();
    await userMNG.checkHousingOperatorRole();
    await userMNG.checkBoxTrojena();
    await userMNG.submitForm();

  })

