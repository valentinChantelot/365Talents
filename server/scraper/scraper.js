import Puppeteer from "puppeteer"

import Parser from "./lib/parser.js"
import Login from "./lib/login.js"

export const Scraper = async (url) => {
    let page = null
    let login_status = null

    if (!page) {
        // Launch puppeteer
        const browser = await Puppeteer.launch()
        page = await browser.newPage()
        page.setViewport({ width: 1024, height: 720 })
        console.info("new puppeteer intance")

        // Login
        login_status = await Login(page)
        if (login_status === false) {
            console.error("Login failed : aborting all process")
            await browser.close()
        }
        console.info("new login")
    }

    // Access required company page
    try {
        await page.goto(url, { waitUntil: "networkidle2" })
    } catch {
        console.error(`Unable to reach ${url}`)
    }

    const contents = await Parser(page)
    return contents
}
