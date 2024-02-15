const scanner = require("sonarqube-scanner");
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "sqa_47f3d9f8820cf3609ced282ad0e4b8bde5671a71",
        options: {}
    },
    () => process.exit()
);