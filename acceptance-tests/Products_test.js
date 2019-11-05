Feature("Products");

Scenario("correct url", I => {
    I.amOnPage("/catalog/magento/");
    I.seeElement(".product");
    I.seeElement("img");
    I.click('.product');
});