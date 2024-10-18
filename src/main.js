const { WebWatchDog } = require('./WebWatchDog.js');
const { By } = require('selenium-webdriver');


class CostcoSniper extends WebWatchDog {
	/* @override */
	async navigate(driver) {
		await driver.get("https://waitwhile.com/locations/costcotire-00521/services/1-ton-dual-rear-wheel");

		await this.waitLoadAndClick(driver, By.css('button[data-cy="toggle-standard-wheel-vehicle"]'));
		await this.waitLoadAndClick(driver, By.css('button[data-cy="toggle-seasonal-exchange-4-wheels/8-tires"]'));

	}

	/* @override */
	async watch(driver) {
		// await driver.navigate().refresh();
		try {
			let allDates = await driver.findElements(By.css('div[role="gridcell"]'));
			console.log(allDates);
			for (let dateButton of allDates) {
				await dateButton.click();
				console.log("Clicked");
				console.log(dateButton);

			}
		} catch(StaleElementReferenceException e

	}
}
new CostcoSniper().run();
