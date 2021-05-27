
This is a java project that automates hepsiburada.com web page using selenium webdriver.
General information

The following tasks are completed with the project

    Login, search product, add selected products to cart from two different merchant, validate selected products on cart.
    Search product, add selected products to cart from two different merchant, validate selected products on cart.

Dependency

Project is created as a maven project and dependencies for selenium and testNG added to pom.xml
Project Structure

Page Object Model is used in this project for providing maintainable, readable and reusable test script.
You can find executable driver used from drivers folder.

    chromeDriver ( latest version )

You can find page classes, config file, base class, utils class in src/main/java/com.hepsiburada.qa

    pages : includes page objects and functions belongs to specified page.
    config : includes a properties file which contains values like url, browser, username, password.
    base : includes base class for initializing driver and reading properties file from config.
    utils	: includes common methods like hovering over an element, waiting for js to complete etc.

You can find tests in src/test/java/com.hepsiburada.qa.tests

    TC_001_AddProductToCartWithLogin
    TC_002_AddProductToCartWithoutLogin
