# web-jest

Front end user testing for the Web Redevelopment Project

## Testing framework is Jest - Puppeteer
Initial Puppeteer setup forked from [@xfumihiro](https://github.com/xfumihiro/jest-puppeteer-example)
This is an example of using the global setup/teardown apis with the async test-environment apis to integrate jest and puppeteer.

### Dependencies
- Node version 8.7.0
- npm 5.6.0

### Installation
When you have upgraded node and npm to meet above requirements `npm install` will install all the packages on the package.json

`npm install -g jest` may be required to use `jest` from the command line

### Configuration
Sensitive or user specific data (e.g. local urls, credentials) are handled by [dotenv](https://www.npmjs.com/package/dotenv).
Create a file `.env` in the root directory storing variables.
```
local_AEM_login=http://localhost:8080/login.html
aem_username=username
aem_password=password
local_AEM_homepage=http://localhost:8080/path/to/home.html?this=variable
live_homepage=https://www.example.com
```

This is set up to integrate with Puppeteer handling headless browser via chromium. [Details](http://facebook.github.io/jest/docs/en/puppeteer.html#content)

### Writing tests
Tests are stored in `website/__tests__`
Browser events are coded via the [Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)
Asserts are via `expect` giving access to [Jest matchers](http://facebook.github.io/jest/docs/en/using-matchers.html#content)

### Running tests
`npm t` or `jest` will run all tests in the `__tests__` directory
`jest string` will run all tests with names matching the regex `/string/` (e.g. `stringtest.js` or `teststring.js`)
`jest string.js` will run only `string.js`

Standard output of test run is to console window. The full `test-report.html` is in the root directory.

### Debugging
To view the tests in progress uncomment settings in `./jest_config/setup.js`
```
headless: false,
slowMo: 1000,
```

