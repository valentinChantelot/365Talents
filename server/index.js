import express from "express"
import { Scraper } from "./scraper/scraper.js"

const app = express()
const port = 3650

const url = "https://www.linkedin.com/company/365talents/about"

app.listen(port, () => {
    console.info(`App started. Listening at http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("Backend ready :)")
})

app.get("/company", (req, res) => {
    const url = req.params.url
    console.log("url:", url)
    res.status(200).json({ test: "yes" })
})

Scraper(url)
