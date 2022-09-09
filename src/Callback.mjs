import * as fs from "node:fs";

fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data) {
    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
});
