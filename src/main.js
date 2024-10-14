let WebWatchDog = require('./WebWatchDog.js');


class CostcoSniper extends WebWatchDog {
	/* @override */
	navigate(driver) {
		driver.get("https://waitwhile.com/locations/costcotire-00521/services/1-ton-dual-rear-wheel");
	}
}
new CostcoSniper.run();
