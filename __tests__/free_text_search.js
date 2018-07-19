const timeout = 20000

describe(
  '/ (Home free text search)',
  () => {
    let page
    jest.setTimeout(20000)
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://www.nhm.ac.uk')
      // await page.goto('http://localhost:4502/content/nhmwww/en/home.html?wcmmode=disabled')
    }, timeout)

    it('should search on free text', async () => {
      await page.click('a#global-header--search-bar__button.global-header--nav-list__link')
      await page.type('input.text.global-header--search-bar__input', 'fleas')
      await page.screenshot({path: './screenshot/fleas_search.png'})
      await page.keyboard.press('Enter')
      await page.waitFor(10000)
      let result = await page.evaluate(() => document.body.textContent)
      expect(result).toContain('Flea')
      await page.screenshot({path: './screenshot/fleas_result.png'})
    })
  },
  timeout
)
