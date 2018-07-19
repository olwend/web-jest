// add details and click button__newsletter-signup
const timeout = 10000

describe(
  '/ (Home -local sign up)',
  () => {
    let page
    jest.setTimeout(20000)
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://localhost:4502/content/nhmwww/en/home.html?wcmmode=disabled')
        }, timeout)

     it('should signup and submit details', async () => {
      await page.waitFor(6000)
      await page.type('#username', 'admin')
      await page.type('#password', 'admin')
      await page.keyboard.press('Enter')
      await page.waitFor(4000)
      await page.type('#newsletter_signup .firstname input', 'Charles')
      await page.type('#newsletter_signup .lastname input', 'Darwin')
      await page.type('#newsletter_signup .email input' , 'cd@evo.com')
      await page.click('#newsletter_signup .button__newsletter-signup')
      await page.screenshot({path: './screenshot/sign_up.png'})
       let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('There has been an error')
    })
  },
  timeout
)
