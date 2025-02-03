const {expect} = require("@playwright/test");
exports.Header = class PageHeader {
    constructor(page) {
        this.page = page;
        this.userTitle = page.locator("[class=user-info] span");
    }

    async assertOnUserTitle(title) {
        await expect(await this.userTitle).toHaveText(title);
    }
}