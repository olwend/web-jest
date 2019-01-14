// qahub.js
let page;

beforeAll(async () => {
	page = await global.__BROWSER__.newPage();
	await page.setViewport({width: 1920, height: 1080});
	await page.goto(process.env.local_AEM_login);
	await page.type('#username', process.env.aem_username);
	await page.type('#password', process.env.aem_password);
	await page.keyboard.press('Enter');
});

afterAll(async () => {
	await page.close();
});

describe( 'Q & A Hub', () => {
	test('should load without error', async () => {
		const selector = '[data-testid="qahub"]',
			text = 'qahub--container';
		await page.goto(process.env.local_AEM_Q_and_A, {
			waitUntil: 'domcontentloaded'
		});
		// const selected = await page.evaluate(() => document.querySelector('[data-testid="qahub"]').className);
		const selected = await page.$eval(selector, el => el.className);
		expect(selected).toContain(text);
	});

	test('h1 title appears correctly', async () => {
		const selector = '.main-section',
			text = 'Q & A Whales';
		await page.goto(process.env.local_AEM_Q_and_A, {
			waitUntil: 'domcontentloaded'
		});
		const selected = await page.$eval(selector, el => el.textContent);
		expect(selected).toContain(text);
	});

	test('select next question', async () => {
		const selector = '[data-testid="question-list"] > a:nth-child(2) > li',
			clickTarget = '#next-question',
			text = 'js-qahub--question-selected';
		await page.goto(process.env.local_AEM_Q_and_A, {
			waitUntil: 'domcontentloaded'
		});
		await page.click(clickTarget);
		const selected = await page.$eval(selector, el => el.className);
		expect(selected).toContain(text);
	});

	test('select previous question', async () => {
		const selector = '[data-testid="question-list"] > a:last-child > li',
			clickTarget = '#prev-question',
			text = 'js-qahub--question-selected';
		await page.goto(process.env.local_AEM_Q_and_A, {
			waitUntil: 'domcontentloaded'
		});
		await page.click(clickTarget);
		const selected = await page.$eval(selector, el => el.className);
		expect(selected).toContain(text);
	});

	// click question 3 and check answer visibility
	// This is rubbish
	test('display answer 3', async () => {
		const selector = '[data-testid="answer-2"]',
			clickTarget = '[data-testid="question-2"]',
			text = 'none';
		await page.goto(process.env.local_AEM_Q_and_A, {
			waitUntil: 'domcontentloaded'
		});
		await page.click(clickTarget);
		await page.waitForSelector(selector, {visible: true});
		const selected = await page.$eval(selector, el => el.style.display);
		expect(selected).not.toContain(text);
	});

});