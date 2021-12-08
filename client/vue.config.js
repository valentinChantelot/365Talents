module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/reset.scss";
                    @import "@/styles/variables.scss";
                    @import "@/styles/global.scss";
                    @import "@/styles/mixins.scss";
                `,
            },
        },
    },
    chainWebpack: (config) => {
        config.module.rules.delete("svg")
        config.module.rules.delete("sass")
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: "vue-svg-loader",
                },
                {
                    test: /\.(jpg|jpeg|woff|woff2|eot|ttf)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                        },
                    },
                },
            ],
        },
    },
}
