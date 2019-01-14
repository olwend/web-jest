
const timeout = 20000

describe(
  '/ (Home - local popular search)',
  () => {
    let page
    jest.setTimeout(20000)
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://www.nhm.ac.uk')
      // await page.goto('http://localhost:4502/content/nhmwww/en/home.html?wcmmode=disabled')
    }, timeout)

    it('should search on popular items text', async () => {
      // await page.type('#username', 'admin')
      // await page.type('#password', 'admin')
      // await page.keyboard.press('Enter')
      await page.waitFor(4000)
      await page.click('a#global-header--search-bar__button.global-header--nav-list__link')
      await page.click('a#pop3')
      await page.waitFor(10000)
      await page.screenshot({path: './screenshot/pop3.png'})
      let url = await page.url()
              expect(url).toMatch(/dinosaurs.html/)
              await page.waitFor(4000)
    })
  },
  timeout
)
