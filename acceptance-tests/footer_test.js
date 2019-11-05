Feature("Home -> Footer Component");

Scenario("correct url", I => {
    I.amOnPage("/catalog/magento/");
    I.seeElement('.footer');
    I.seeElement("a .arrow.arrow--right");
    I.seeElement('.footer-items-card');
    I.click('a');
});


