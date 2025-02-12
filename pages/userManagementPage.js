const {expect} = require("@playwright/test");
exports.userManagementPage = class userManagementPage{

    constructor(page) {
        this.page = page;
        this.configrationButton= page.locator('//*[@id="b2-b30-SubMenuHeader"]')
        this.userButton = page.locator('//*[@id="b2-Users"]')
        this.userPageTittle = page.locator('//*[@id="b1-pagename"]/div/span')
        this.addUserButton= page.locator('//*[@id="b3-$b7"]/div[1]/button')
 //UserForm
        this.userDetailsFormTittle= page.locator('//*[@id="b1-pagename"]/div[2]/span')
        this.nonNEOMEmployee = page.locator ('//*[@id="b3-Dropdown1"]');
        this.userEmailInput = page.locator('//*[@id="b3-Input_Form_Email"]');
        this.userNameInput  = page.locator('//*[@id="b3-Input_Form_UserName"]')
        this.userMobileNumber = page.locator('//*[@id="b3-Input_Form_MobileNumber"]')
        this.SubmitButton= page.getByRole('button', { name: 'Submit' })

 //Roles Checkbox
        this.HousingOperator=  page.locator("//span[contains(text(), 'Housing Operator')]/preceding::input[@type='checkbox']");
        this.HousingManager=  page.locator('#b3-l3-267_1-Checkbox3');
        this.HousingInspector = page.locator('#b3-l3-267_2-Checkbox3');
        this.Auditor =  page.locator('#b3-l3-267_3-Checkbox3');
        this.HousingReceptionist=   page.locator('#b3-l3-267_4-Checkbox3');
        this.LostAndFoundOperator=  page.locator('#b3-l3-267_5-Checkbox3');
        this.HousingDashboard =  page.locator('#b3-l3-267_6-Checkbox3');

//Commuinties CheckBox
         this.Community1= page.locator('#b3-l4-268_0-Checkbox4');
         this.MarsaHotelDuba =  page.locator('#b3-l4-268_1-Checkbox4');
         this.NEOMCommunity1= page.locator('#b3-l4-268_2-Checkbox4');
         this.NEOMCommunity2 =page.locator('#b3-l4-268_3-Checkbox4');
         this.OXAGON = page.locator('#b3-l4-268_4-Checkbox4');
         this.TROJENA = page.locator("//span[contains(text(), 'TROJENA')]/preceding-sibling::span/input[@type='checkbox']");
         this .editbutton =page.locator('//*[@id="b3-$b7"]/div[3]/table/tbody/tr[1]/td[1]/div/a/img');
         this.updateSubmitButton =page.getByRole('button', { name: 'Submit' });
         this.yesUpdateButton=  page.getByRole('button', { name: 'Yes' });
         this.AuditorUpdate= page.locator("#b3-l3-2218_3-Checkbox3")
         this.popupMessage= page.locator.('popup-content')
}
    async gotoUserManagementTab(){
            await this.configrationButton.click();
            await expect(await this.userButton).toBeVisible();
            await this.userButton.click();
        }


       async assertOnUsersPagePageTitle() {
               await expect(await this.userPageTittle).toBeVisible();

          }


   async  gotoUserDetailsForm (){
   await this.addUserButton.click();
   }

     async assertOnUsersDetailsFormTitle() {
                  await expect(await this.userDetailsFormTittle).toBeVisible();

             }
    async chooseNonNEOMEmployee(){
    await this.nonNEOMEmployee.click();
       await this.nonNEOMEmployee.selectOption({ value : '1' });
    }

  async  fillUserData (email , username , mobileNumber ){
  await this.userEmailInput.fill(email);
  await this.userNameInput.fill(username);
  await this.userMobileNumber.fill(mobileNumber);
  }

    async checkHousingOperatorRole(){
      await this.HousingOperator.check();
    }
    async checkAuditorRole(){
          await this.Auditor.check();

        }
      async checkHousingManagerRole(){
            await this.HousingManager.check();

          }

   async clickEditButton(){
     await  this.editbutton.click();
   }

   async checkAuditorUpdate(){
   await this.AuditorUpdate.check();
   }

    async checkBoxTrojena(){
      await this.TROJENA.check();
    }

    async checkBoxCommunity1(){
      await this.Community1.check();
    }


    async checkBoxOxagon(){
    await this.OXAGON.check();
    }


    async submitForm(){
    await this.SubmitButton.click();
}

async SubmitUpdateForm(){
 await this.updateSubmitButton.click();
}
async updateFormYes(){
   await this.yesUpdateButton.click();
}
async assertPopUpMessage(){
await expect(popupMessage).toBeVisible();

}

}