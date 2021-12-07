import express from "express"
import axios from "axios"
import cors from "cors"

import { Scraper } from "./scraper/scraper.js"

const app = express()
const port = 3650

app.use(cors())

app.listen(port, () => {
    console.info(`App started. Listening at http://localhost:${port}`)
})

app.get("/company", async (req, res) => {
    const url = req.query.url

    if (!url) {
        res.status(400).json("Company name is required")
        return
    }

    // const data = await Scraper(url)

    const data = {
        name: "test",
    }
    res.status(200).json(data)
})
