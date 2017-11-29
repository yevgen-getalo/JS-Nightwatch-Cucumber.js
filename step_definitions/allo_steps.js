'use strict'
module.exports = function () {
    this.Given(/^open homepage "([^"]*)"$/, function (page) {
        this
            .init()
            .useXpath()
            .windowMaximize()
            .url(page)
    });

    this.When(/^type "([^"]*)" into search field$/, function (product) {
        this.setValue("//input[@class='input-text']", product)
    });

    this.When(/^click search button$/, function () {
        this.click("//*[@id='search_mini_form']/button")
    });

    this.Then(/^search page with current product should be shown$/, function () {
        this.assert.elementPresent("(//a[@title = 'Sony Xperia XZ F8332 Dual Platinum'])[2]")

    });

    this.When(/^click right button to slide images to the right$/, function () {
        this
            .moveToElement("//div[@class = 'rubber-slide']", 100, 100)
            .pause(3000)
            .click("//a[@class = 'mover next']")
    });

    this.Then(/^next image should be shown$/, function () {
        this
            .pause(1000)
            .assert.elementPresent("//div[@id = 'slide2']")
    });

    this.When(/^click left button to slide images to the left$/, function () {
        this
            .moveToElement("//div[@class = 'rubber-slide']", 100, 100)
            .click("//a[@class = 'mover prev']")
    });

    this.Then(/^previous image should be shown$/, function () {
        this
            .pause(1000)
            .assert.elementPresent("//div[@id = 'slide1']")
    });

    this.When(/^click contact button in the top bar$/, function () {
        this
            .click("//a[@class = 'info1_kontakty']")
    });

    this.Then(/^contact page should be opened$/, function () {
        this
            .assert.containsText("//h1[@class = 'page-title']", "Контакты")
            .assert.elementPresent("//div[@class = 'breadcrumbs']//li[@class='cms_page']")
    });

    this.When(/^hover mouse on the change language button$/, function () {
        this
            .moveToElement("//div[@class = 'store-switcher-container']", 54, 23)

    });

    this.When(/^select "([^"]*)" language$/, function (lang) {
        this
            .waitForElementVisible("//div[@class = 'store-switcher-container active-switch']", 3000)
            .click("//span[contains(text(), '" + lang + "')]")
    });

    this.Then(/^site should be shown in selected language$/, function () {
        this
            .pause(2000)
            .assert.containsText("//span[@class='menu-icon']/following-sibling::span[@class='caption']", "Каталог товарів")
    });

    this.When(/^type into search field require model "([^"]*)"$/, function (product) {
        this
            .setValue("//input[@class='input-text']", product)
            .click("//*[@id='search_mini_form']/button")
            .click("//div[@class='product-container-all catalogcolorconf']//p/a")
    });

    this.When(/^click on the buy button$/, function () {
        this
            .click("//button[@class='buy big']")
            .waitForElementPresent("//*[@id='button-checkout-popup']", 10000)
            .click(".//*[@id='button-checkout-popup']")
    });

    this.Then(/^check that cart page is opened$/, function () {
        this.assert.containsText("//div[@class='checkout-container customer_not_logged_in']/h1", "Оформление заказа")
    });

    this.When(/^click on the social "([^"]*)"$/, function (link) {
        this
            .execute(function(){
                document.getElementById("//ul[@class='weinsocial_ul']").scrollIntoView();
            })
            .click("//a[@href='https://" + link + ".com/allo']")
            .windowHandles(function(result) {
                var handle = result.value[1];
                this.switchWindow(handle);
            })
    });

    this.Then(/^social "([^"]*)" should be opened$/, function (site) {
        this
            .pause(3000)
            .assert.urlContains(site)

    });

    this.When(/^click on the blog link$/, function () {
        this
            .click("//a[contains(text(), 'Блог')]")
            .windowHandles(function(result) {
            var handle = result.value[1];
            this.switchWindow(handle);
        })
    });

    this.Then(/^blog page should be opened$/, function () {
        this
            .assert.urlContains('blog')
    });

    this.When(/^hover mouse on the catalog button$/, function () {
        this.moveToElement("//span[.='Смартфоны и телефоны']", 149, 15)

    });


    this.Then(/^catalog menu should be shown$/, function () {
        this
            .useCss()
            .assert.waitForElementVisible("div#menu_mobile_phone[style='display: block;']", 1000)
    });

    this.When(/^select required product type$/, function () {
        this
            .useXpath()
            .click("//div[@id ='menu_mobile_phone']//a[contains(text(), 'Sony')]")
    });

    this.Then(/^search page with selected products should be shown$/, function () {
        this
            .assert.elementPresent("//h1[contains(text(), 'Телефоны Sony')]")
    });

    this.When(/^change page view with different "([^"]*)"$/, function (view) {
        this
            .click("(//a[@class='" + view + "'])[1]")
    });

    this.Then(/^page should be shown in "([^"]*)" format$/, function (checkView) {
        this
            .pause(2000)
            .assert.elementPresent(checkView)
    });
};
