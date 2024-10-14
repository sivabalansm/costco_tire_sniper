const utils = require('./utils.js');
const firefox = require('selenium-webdriver/firefox');
const { Builder } = require('selenium-webdriver');

class WebWatchDog {
	#checkInterval = 0;
	#headless = false;

	constructor(url, interval = 30, headless = false) {
		this.setInterval(interval);
		this.setHeadless(headless);
	}

	set setHeadless(isHeadless) {
		this.#headless = isHeadless;
	}

	set setInterval(time) {
		this.#checkInterval = time * 1000;
	}


	async initDriver() {
		let driver = await new Builder()
			.forBrowser(Broswser.FIREFOX)
			.build();
		return driver;
	}
	
	async navigate(driver) {
		throw new Error("navigate(driver) method must be overriden!");
	}

	async watch(driver) {
		throw new Error("watch(driver) method must be overriden!");
	}

	async run() {
		let driver = await this.initDriver();
		await navigate(driver);

		while(true) {
			await this.watch(driver);
			await utils.sleep(this.#checkInterval);
		}
	}

}

exports.WebWatchDog = WebWatchDog;
