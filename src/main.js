const { WebWatchDog } = require('./WebWatchDog.js');
const { until, By } = require('selenium-webdriver');


class CostcoSniper extends WebWatchDog {
	/* @override */
	async navigate(driver) {
		await driver.get("https://waitwhile.com/locations/costcotire-00521/services/1-ton-dual-rear-wheel");
		await driver
	}
}
new CostcoSniper().run();
