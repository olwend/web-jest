const chalk = require('chalk'),
	NodeEnvironment = require('jest-environment-node'),
	puppeteer = require('puppeteer'),
	fs = require('fs'),
	os = require('os'),
	path = require('path'),
	DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
	constructor(config) {
		super(config);
	}

	async setup() {
		console.log(chalk.green('Setup Puppeteer Test Environment.'));
		await super.setup();
		const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
		if (!wsEndpoint) {
			throw new Error('wsEndpoint not found');
		}
		this.global.__BROWSER__ = await puppeteer.connect({
			browserWSEndpoint: wsEndpoint,
		});
	}

	async teardown() {
		await super.teardown();
	}

	runScript(script) {
		return super.runScript(script);
	}
}

module.exports = PuppeteerEnvironment;