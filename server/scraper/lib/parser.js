const Parser = async (page) => {
    const data = await page.evaluate(() => {
        const companyName =
            document.querySelector("h1")?.innerText?.trim() || null
        const website =
            document.querySelector(".org-top-card-primary-actions__inner a")
                ?.href || null
        const activityArea =
            document
                .querySelectorAll(
                    ".org-top-card-summary-info-list__info-item"
                )[0]
                ?.textContent?.trim() || null
        const description =
            document
                .querySelector(
                    ".org-grid__content-height-enforcer section.artdeco-card p.break-words"
                )
                ?.textContent?.trim() || null
        const logo =
            document.querySelector(
                ".lazy-image.ember-view.org-top-card-primary-content__logo"
            )?.src || null

        const otherInfos = document.querySelectorAll(
            ".org-grid__content-height-enforcer section.artdeco-card dl dt"
        )
        const globalLookup = []

        otherInfos.forEach((info) => {
            let value
            if (info.nextElementSibling.firstElementChild) {
                value = info.nextElementSibling.firstElementChild.innerText
            } else {
                value = info.nextElementSibling.innerText
            }
            return globalLookup.push({ [info.innerText]: value })
        })

        return {
            companyName: companyName,
            website: website,
            activityArea: activityArea,
            description: description,
            logo: logo,
            globalLookup: globalLookup,
        }
    })
    return data
}

export default Parser
