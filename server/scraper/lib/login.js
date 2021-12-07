import { LinkedIn_UserName, LinkedIn_Password } from "../../config.js"

const Login = async (page) => {
    await page.goto("https://www.linkedin.com/login")
    await page.type("#username", LinkedIn_UserName)
    await page.type("#password", LinkedIn_Password)
    await page.click(
        "#organic-div > form > div.login__form_action_container > button"
    )
    await page.waitForNavigation({ waitUntil: "load" })
    await new Promise((r) => setTimeout(r, 5000))

    return page.url() === "https://www.linkedin.com/feed/" ? true : false
}

export default Login
