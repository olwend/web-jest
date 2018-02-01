const chalk = require('chalk'),
	puppeteer = require('puppeteer'),
	fs = require('fs'),
	env = require('dotenv').config(),
	mkdirp = require('mkdirp'),
	os = require('os'),
	path = require('path'),
	DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
	console.log(chalk.green('Setup Puppeteer Environment.'));
	const browser = await puppeteer.launch({
		// headless: false,
		// slowMo: 1000,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	})
	global.__BROWSER__ = browser;
	mkdirp.sync(DIR);
	fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}