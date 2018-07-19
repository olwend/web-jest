// click foundation (Visit, Our Science, Events (event slide content)
// Discover (discover-element-text)

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

describe('/ (Home cta click throughs )', () => {

      test('cta image link goes to Visit page', async () => {
        // const selector = '.eventsummary'
          clickTarget = 'div.ctabutton a[href="/visit.html"]',
          text = 'Last entry to the Museum'
          //set to local or staging
        await page.goto(process.env.live_homepage, {
            waitUntil: 'domcontentloaded'
          });
        await page.click(clickTarget)
        // await page.waitForSelector(selector);
        // const selected = await page.$eval(selector, el => el.textContent);
        // expect(selected).toContain(text);
        await page.screenshot({path: './screenshot/visit_image_link.png'})
    });
});
//       it('cta plan a great day link goes to Visit page', async () => {
//         await page.click('div.visit a[href="/visit.html"]' )
//         await page.waitFor(6000)
//         let text = await page.evaluate(() => document.body.textContent)
//         expect(text).toContain('Last entry to the Museum')
//         await page.screenshot({path: './screenshot/visit_text_link.png'})
//     })
//
//       it('discover element title goes to full Discover article', async () => {
//         await page.click('a.element-title')
//         await page.waitFor(6000)
//         let text = await page.evaluate(() => document.body.textContent)
//         expect(text).toContain('First published')
//         await page.screenshot({path: './screenshot/discover-title.png'})
//     })
//
//       it('discover element image goes to full Discover article', async () => {
//         await page.click('li.discover-element:nth-child(1) a[href$=".html"]')
//         await page.waitFor(6000)
//         let text = await page.evaluate(() => document.body.textContent)
//         expect(text).toContain('First published')
//         await page.screenshot({path: './screenshot/discover-image.png'})
//     })
//
//         it('cta image link goes to Our science page', async () => {
//           await page.click('div.ctabutton a[href="/our-science.html"]')
//           await page.waitFor(6000)
//           let text = await page.evaluate(() => document.body.textContent)
//           expect(text).toContain('Science events')
//           await page.screenshot({path: './screenshot/science_image_link.png'})
//     })
//
//         it('cta Explore research collections link goes to Our science page', async () => {
//           await page.click('div.our-science a[href="/our-science.html"]' )
//           await page.waitFor(6000)
//           let text = await page.evaluate(() => document.body.textContent)
//           expect(text).toContain('Science events')
//           await page.screenshot({path: './screenshot/science_text_link.png'})
//     })
//
//   },
//   timeout
// )
