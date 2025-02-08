const {expect} = require("@playwright/test");
exports.Login = class LoginPage{

    constructor(page) {
        this.page = page;
        this.loginPageTitle = page.locator("div[class='login-logo'] div div:nth-child(1)");
        this.emailTextBox = page.locator('[id="b1-Input_UsernameVal"]');
        this.passwordTextBox = page.getByLabel('Password', { exact: true });
        this.loginButton = page.getByRole("button", { name: "Login", exact: true});
        this.emailField = page.locator('#b1-Input_UsernameVal');
        /*this.passwordField = page.locator('#b1-Input_PasswordVal');
        this.loginButton = page.locator('.login-btn');*/
    }

    async goto(){
        await this.page.goto('https://testappoutsystems.neom.com/Housing/Login')
    }

    async assertOnLoginPageTitle(){
        await expect(await this.loginPageTitle.textContent()).toBe("NEOM Operations");
   }

    async loginWithValidCredentials(email, password){
        await this.emailTextBox.fill(email);
        await this.passwordTextBox.fill(password)
        await this.loginButton.click()
    }



}