({
    appDir: "${basedir}/src/main/webapp",
    baseUrl: "js",
    dir: "${basedir}/target/${project.build.finalName}",
    
    optimizeCss: "standard.keepLines",
    mainConfigFile: "${basedir}/src/main/webapp/js/main.js",

    inlineText: true,
    removeCombined: true,
    fileExclusionRegExp: /^build$/,
	
    modules: [
    {
        name: "main"
    }
    ]
})