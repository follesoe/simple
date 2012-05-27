var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "browser",
    libs: [
        "lib/jquery-1.7.2.js",
        "lib/EventEmitter.js"
    ],
    src: ["simple.js"],
    specs: ["spec/*-spec.js"]
};
