const puppeteer = require('puppeteer')
const launchOptions = {
    headless: false
}

describe('google page test', () => {
    it('opens google page in the browser', async () => {
        const browser = await puppeteer.launch(launchOptions)
        const page = await browser.newPage()
        await page.goto("https://www.google.com")
        await new Promise(r => setTimeout(r, 3000))
        await browser.close()
    })
});