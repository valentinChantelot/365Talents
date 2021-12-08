import express from "express"
import { Scraper } from "../scraper/scraper.js"

const router = express.Router()

router.post("/", async (req, res) => {
    const companyName = req.body.company

    if (!companyName) {
        res.status(400).json("Company name is required")
        return
    }

    const url = `https://www.linkedin.com/company/${companyName}/`
    const data = await Scraper(url)
    data.error ? res.status(500).json(data) : res.status(200).json(data)
})

export default router
