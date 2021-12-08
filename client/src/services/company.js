import http from "../http-common.js"

export const getCompanyInfos = async (data) => {
    return await http.post("/company", data)
}
