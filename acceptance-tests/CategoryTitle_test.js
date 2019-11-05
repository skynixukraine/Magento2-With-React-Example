Feature("CategoryTitle");

Scenario("correct url", I => {
    I.amOnPage("/category/magento");
    I.seeElement(".category-heading");
    I.seeElement("h2");
});