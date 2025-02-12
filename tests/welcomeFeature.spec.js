import { test, expect } from '@playwright/test';
import {Login} from '../pages/loginPage'
import { MainMenu } from '../pages/mainMenu';
import {WelcomeFeatures} from '../pages/welcomeFeature'
const roles = require('../testData/roles.json').roles;


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
    await welcomeFeatures.enter_active_feature_details('test_active4','hello');
    await expect(page.locator('text=test_active3')).toBeVisible();
    await welcomeFeatures.add_new_feature();
    await welcomeFeatures.enter_inactive_feature_details('test_inactive4','hello');
    //make assertion on inactive
    await page.pause();






});