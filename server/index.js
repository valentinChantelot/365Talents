import express from "express"
import Scrapper from "./linkedInScraper/scraper.js"

const app = express()
const port = 3650

const url = "https://www.linkedin.com/company/365talents/"

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

Scrapper(url)
