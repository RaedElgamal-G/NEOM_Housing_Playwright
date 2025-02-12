import { test, expect } from '@playwright/test';
import {Login} from '../pages/loginPage'
import { MainMenu } from '../pages/mainMenu';
import {WelcomeFeatures} from '../pages/welcomeFeature'
const roles = require('../testData/roles.json').roles;
const activeFeatureName = require('../testData/data.json').activeFeatureName;
const inActiveFeatureName = require('../testData/data.json').inActiveFeatureName;





test('welcome Feature', async ({ page }) => {
    const login = new Login(page);
    const sideMenu=new MainMenu(page);
    const welcomeFeatures=new WelcomeFeatures(page);
    await login.goto();
    await login.loginWithValidCredentials(roles.admin.email,roles.admin.password)
    await sideMenu.clickOnExpandMenuButton();
    await sideMenu.openWelcomeFeaturePage();
    await welcomeFeatures.assertOnWelcomeFeaturePageTitle();
    await welcomeFeatures.add_new_feature();
    await welcomeFeatures.enter_active_feature_details(activeFeatureName,'hello');
    //await expect(page.locator('text=' + activeFeatureName)).toBeVisible();
    //await expect(page.locator('text=${activeFeatureName}')).toBeVisible();
    //await page.pause();
    //await expect(page.locator(`text=${activeFeatureName}`)).toBeVisible();
    await welcomeFeatures.assertOnFeatureName(activeFeatureName);
    //await expect(page.locator((//td[@data-header='Feature Name']/div)[1]))

    await welcomeFeatures.add_new_feature();
    await welcomeFeatures.enter_inactive_feature_details(inActiveFeatureName,'hello');
    //make assertion on inactive
    //await page.pause();






});