import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import companyRoute from "./routes/company.js"

const app = express()
const port = 3650
var corsOptions = {
    origin: "http://localhost:8080",
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/company", companyRoute)

app.listen(port, () => {
    console.info(`App started. Listening at http://localhost:${port}`)
})
