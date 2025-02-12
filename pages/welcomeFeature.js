const {expect} = require("@playwright/test");
exports.WelcomeFeatures=class WelcomeFeatures{
    constructor(page){
        this.page=page
        this.welcomeFeaturePageTitle = page.locator("//div[@class='header-wrapper']//span[text()='Welcome Features']");
        this.add_button=page.locator('//span[contains(text(), "Add")]')
        this.feature_name_textbox=page.locator('//input[@class="form-control OSFillParent"]')
        this.Active_radio_button=page.locator('//input[@id="b3-b1-b1-Active_RadioButton-input"]')
        this.inActive_radio_button=page.locator('//input[@id="b3-b1-b1-Inactive_RadioButton-input"]')
        this.send_mail_to_resident_checkbox=page.locator('//input[@id="b3-b1-b1-Mail_To_Resident"]')
        this.send_mail_to_housing_team_checkbox=page.locator('//input[@id="b3-b1-b1-Mail_To_Housing_Team"]')
        this.iframe = page.frameLocator('//iframe[@class="cke_wysiwyg_frame cke_reset"]')        
        this.email_body_text_area=this.iframe.locator('//body[@contenteditable="true"]')
        this.save_button=page.locator('//button[text()="Save"]')
        this.cancel_button=page.locator('//button[text()="Cancel"]')
    }
   
    async assertOnWelcomeFeaturePageTitle(){
            await expect(await this.welcomeFeaturePageTitle.textContent()).toBe("Welcome Features");
       }
    async add_new_feature(){
        await this.add_button.click();
    }
    async enter_active_feature_details(name,text){
        await this.feature_name_textbox.fill(name);
        await this.Active_radio_button.click();
        await this.send_mail_to_resident_checkbox.click();   
        await this.send_mail_to_housing_team_checkbox.click();   
        await this.email_body_text_area.waitFor();
        await this.email_body_text_area.click();
        await this.email_body_text_area.fill(text);
        await this.save_button.click();
    }
    async enter_inactive_feature_details(name,text){
        await this.feature_name_textbox.fill(name);
        await this.inActive_radio_button.click();
        await this.send_mail_to_resident_checkbox.click();   
        await this.send_mail_to_housing_team_checkbox.click();   
        await this.email_body_text_area.waitFor();
        await this.email_body_text_area.click();
        await this.email_body_text_area.fill(text);
        await this.save_button.click();
    }
}