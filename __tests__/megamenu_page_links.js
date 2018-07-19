// check hrefs are working - set for live_homepage
let page;

beforeAll(async () => {
	page = await global.__BROWSER__.newPage();
	await page.setViewport({width: 1920, height: 1080});
	await page.goto(process.env.live_homepage);
	// await page.goto(process.env.local_AEM_login);
	// await page.type('#username', process.env.aem_username);
	// await page.type('#password', process.env.aem_password);
	// await page.keyboard.press('Enter');
});

afterAll(async () => {
	await page.close();
});

describe( 'Megamenu page links', () => {
	test('visit option goes to /visit.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-visit');
		let url = await page.url();
		expect(url).toMatch(/visit.html/);
	});

	test('discover option goes to /discover.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-discover');
		let url = await page.url();
		expect(url).toMatch(/discover.html/);
	})

	test('take part option goes to /take-part.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-take-part')
		let url = await page.url();
		expect(url).toMatch(/take-part.html/);
	})

	test('join and Support option goes to /support-us.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-support-us')
		let url = await page.url();
		expect(url).toMatch(/support-us.html/);
	})

	test('schools option goes to /schools.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-schools')
		let url = await page.url();
		expect(url).toMatch(/schools.html/);
	})

	test('our science option goes to /our-science.html', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-our-science')
		let url = await page.url();
		expect(url).toMatch(/our-science.html/);
	})

	test('shop option goes to https://www.nhmshop.co.uk', async () => {
		await page.goto(process.env.live_homepage, {
		// await page.goto(process.env.local_AEM_homepage, {
			waitUntil: 'domcontentloaded'
		});
		await page.click('.link-shop')
		let url = await page.url();
		expect(url).toMatch('https://www.nhmshop.co.uk');
	})
});
