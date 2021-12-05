import jsdom from "jsdom"
import Q from "q"
import ProfileFactory from "./lib/profile.js"

export const Scrapper = (originalUrl, callback) => {
    const deferred = Q.defer()
    const linkedInURL = originalUrl.replace(/[a-z]*\.linkedin/, "www.linkedin")

    console.log("test")

    jsdom.env({
        url: linkedInURL,
        scripts: ["http://code.jquery.com/jquery.js"],
        headers: {
            Accept: "text/html",
            //'Accept-Encoding': 'gzip',
            "Accept-Language": "en-US;q=0.6,en;q=0.4",
            "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36",
        },
        proxy: process.env.PROXY_HOST,
        tunnel: process.env.PROXY_HOST ? false : undefined,
        done: function (errors, window) {
            if (errors) {
                if (callback) {
                    callback(errors)
                } else {
                    deferred.reject(errors)
                }
            } else {
                const profile = ProfileFactory(window)
                profile.publicProfileUrl = originalUrl
                console.log(profile)
                if (callback) {
                    callback(null, profile)
                } else {
                    deferred.resolve(profile)
                }
            }
        },
    })

    return deferred.promise
}

export default Scrapper
