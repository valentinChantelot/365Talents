import dotenv from "dotenv"

dotenv.config()

const LinkedIn_UserName = process.env.LINKEDIN_USERNAME
const LinkedIn_Password = process.env.LINKEDIN_PASSWORD

export { LinkedIn_UserName, LinkedIn_Password }
