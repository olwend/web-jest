// parbase section headertextimage

// click through 'join and support' -> 'membership'
const timeout = 10000

describe(
  '/ (Home hti)',
  () => {
    let page
    jest.setTimeout(15000)
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      // await page.emulate(iPhone)
      await page.goto('https://www.nhm.ac.uk')
    }, timeout)

    it('should move through to membership hti on click of hti', async () => {
      await page.click('li.global-header--nav-list__item.link-support-us')
      await page.waitFor(4000)
      let url = await page.url()
          expect(url).toMatch(/support-us.html/)
      await page.click('div.hti-wrapper a[href="/support-us/membership.html"]')
      await page.waitFor(4000)
      let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('Membership benefits')
    })
  },
  timeout
)
