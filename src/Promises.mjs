import * as fs from "node:fs/promises";

fs.readFile("file-1.txt", { encoding: "utf-8" })
    .then(function (data) {
        console.log("data:", data);
    })
    .then(function () {
        return fs
            .readFile("file-2.txt", { encoding: "utf-8" })
            .then(function (data) {
                console.log("data:", data);
            });
    })
    .then(function () {
        return fs
            .readFile("file-3.txt", { encoding: "utf-8" })
            .then(function (data) {
                console.log("data:", data);
            });
    })
    .catch(function (error) {
        console.error(error);
    });
