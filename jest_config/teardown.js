const chalk = require('chalk'),
	rimraf = require('rimraf'),
	os = require('os'),
	path = require('path'),
	DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
	console.log(chalk.green('Teardown Puppeteer Environment.'));
	await global.__BROWSER__.close();
	rimraf.sync(DIR);
}