// import companyFactory from "./company.js"
// experienceFactory = require('./experience'),
// //Honors = require('./honors'),
// //Project = require('./projects'),
// educationFactory = require('./education'),
// languageFactory = require('./language');

export const ProfileFactory = (window) => {
    if (!window) {
        return {}
    }

    const $ = window.$
    console.log("$:", $)

    const profile = {
        name: $("h1").attr("title"),
    }

    return profile
}

// module.exports = function (window) {
//     // var profile = {
//     //     name: $("#name").text(),
//     //     pictureUrl: (function (img) {
//     //         return img.attr("src") || img.attr("data-delayed-url")
//     //     })($(".profile-picture a .photo")),
//     //     headline: $("p[data-section=headline]").text(),
//     //     location: $("span.locality").text(),
//     //     summary: $("#summary .description").text(),
//     //     industry: $("[class=descriptor]", "#demographics").text(),
//     //     currentPositions: [],
//     //     pastPositions: [],
//     //     websites: [],
//     //     positions: [],
//     //     //honors: [],
//     //     //projects: [],
//     //     educations: [],
//     //     skills: [],
//     //     languages: [],
//     // }

//     // $("[data-section=currentPositions] td ol li").each(function () {
//     //     profile.currentPositions.push(companyFactory($(this)))
//     // })
//     // $("[data-section=pastPositions] td ol li").each(function () {
//     //     profile.pastPositions.push(companyFactory($(this)))
//     // })

//     // $("#experience .positions .position").each(function () {
//     //     profile.positions.push(experienceFactory($(this)))
//     // })
//     //$('#background-honors div div div').each(function () {
//     //    profile.honors.push(new Honors($(this).find('h4 span').text(),
//     //        $(this).find('h5 span').text(),
//     //        $(this).find('> span').text(),
//     //        $(this).find('p').text()
//     //    ));
//     //});
//     //
//     //$('#background-projects div div').each(function () {
//     //    profile.projects.push(new Project($(this).find('hgroup h4 a span:first').text(),
//     //        $(this).find('> span.projects-date').text(),
//     //        $(this).find('> p').text(),
//     //        $(this).find('hgroup h4 a[href]').attr('href')
//     //    ));
//     //});

//     // $("#education .schools .school").each(function () {
//     //     profile.educations.push(educationFactory($(this)))
//     // })

//     // $("#skills .skill a").each(function () {
//     //     profile.skills.push($(this).text())
//     // })

//     // $("#languages .language .wrap").each(function () {
//     //     profile.languages.push(languageFactory($(this)))
//     // })

//     return profile
// }

export default ProfileFactory
