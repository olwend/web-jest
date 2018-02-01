// Hours/ admission
// Membership
let page;

beforeAll(async () => {
	page = await global.__BROWSER__.newPage();
	await page.setViewport({width: 1920, height: 1080});
	// await page.goto(process.env.local_AEM_login);
	// await page.type('#username', process.env.aem_username);
	// await page.type('#password', process.env.aem_password);
	// await page.keyboard.press('Enter');
});

afterAll(async () => {
	await page.close();
});

describe( 'Megamenu info links', () => {
	test('should show "Getting here" title', async () => {
		const selector = '.title-bar',
			clickTarget = '.global-header--info > li:first-child > a',
			text = 'Getting here';
		// await page.goto(process.env.local_AEM_homepage, {
		await page.goto(process.env.live_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click(clickTarget);
		await page.waitForSelector(selector);
		const selected = await page.$eval(selector, el => el.textContent);
		expect(selected).toContain(text);
		// await page.screenshot({path: './screenshot/info_item.png'});
	});

	test('should show "Membership" title', async () => {
		const selector = '.title-bar',
			clickTarget = '.global-header--info > li:last-child > a',
			text = 'Membership';
		// await page.goto(process.env.local_AEM_homepage, {
		await page.goto(process.env.live_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click(clickTarget);
		await page.waitForSelector(selector);
		const selected = await page.$eval(selector, el => el.textContent);
		expect(selected).toContain(text);
		// await page.screenshot({path: './screenshot/membership.png'});
	});
});