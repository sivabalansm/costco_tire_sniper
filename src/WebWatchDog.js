const utils = require('./utils.js');
const firefox = require('selenium-webdriver/firefox');
const { Builder, Browser, until } = require('selenium-webdriver');

class WebWatchDog {
	#checkInterval = 0;
	#headless = false;

	constructor(interval = 30, headless = false) {
		this.setCheckInterval = interval;
		this.setHeadless = headless;
	}

	set setHeadless(isHeadless) {
		this.#headless = isHeadless;
	}

	set setCheckInterval(time) {
		this.#checkInterval = time * 1000;
	}


	async initDriver() {
		let driver = await new Builder()
			.forBrowser(Browser.FIREFOX)
			.build();
		return driver;
	}

	static async isElement(driver, locator) {
		try {
			await driver.findElement(locator);
			return true;
		} catch(err) {
			return false;
		}
	}

	async waitLoadAndClick(driver, locator) {
		try {
			await driver.wait(until.elementLocated(locator), 10000);
			let button = await driver.findElement(locator);
			await button.click();
		} catch(err) {
			console.log("Couldn't find the element, retrying from scratch...");
			this.navigate(driver);
		}
	}
	
	async navigate(driver) {
		throw new Error("navigate(driver) method must be overriden!");
	}

	async watch(driver) {
		throw new Error("watch(driver) method must be overriden!");
	}

	async notify() {
		throw new Error("notify() mehtod must be overriden!");
	}

	async run() {
		let driver = await this.initDriver();
		await this.navigate(driver);

		while(true) {
			let isFound = await this.watch(driver);
			if (isFound) {
				await notify();
			}
			await utils.sleep(this.#checkInterval);
		}
	}

}

exports.WebWatchDog = WebWatchDog;
