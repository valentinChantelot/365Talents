import http from "../http-common.js"

export const getCompanyInfos = async (data) => {
    try {
        return await http.post("/company", data)
    } catch (error) {
        console.error(error)
    }
}
