import Puppeteer from "puppeteer"

import Parser from "./lib/parser.js"
import Login from "./lib/login.js"

export const Scraper = async (url) => {
    let page, login_status

    if (!login_status) {
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
    const response = await page.goto(url, { waitUntil: "networkidle2" })
    if (response._status === 404) {
        return {
            error: "La page demandé n'existe pas.",
        }
    }
    if (response._status === 500) {
        return {
            error: "Impossible de joindre le serveur de LinkedIn.",
        }
    }

    try {
        const contents = await Parser(page)
        return contents
    } catch (error) {
        console.error(error)
        return {
            error: `Error during parsing : ${error}`,
        }
    }
}
