const fs = require("fs");

function problem1() {
    let dir = "./randomJSON/";

    fs.access(dir, (error) => {
        if (error) {
            console.log(`Creating directory ${dir} as it does not exist.`);

            fs.mkdir(dir, (error, data) => {
                if (error) {
                    console.error(error);
                }

                let allFileName = []

                for (var i = 0; i < 5; i++) {
                    let randomFileNumber = Math.floor(Math.random() * 10);
                    let randomFileName = dir + "randomFile" + randomFileNumber + ".json";
                    let jsonData = { message: "Hello, from the other side" };

                    fs.access(randomFileName, (error) => {
                        if (error) {

                            fs.writeFile(randomFileName, JSON.stringify(jsonData), "utf-8", (error) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    allFileName.push(randomFileName);

                                    console.log(`file written ${randomFileName}`);

                                    deleteFiles(allFileName);
                                }
                            });

                        }

                    });

                }

            });
        }
        else {
            console.log(`The ${dir} directory exists.`);

            fs.rmdir(dir, { recursive: true }, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(`deleted ${dir} including files inside`);
                    console.log("Run again");
                }
            });

        }
    });
}
module.exports = problem1;

function deleteFiles(allFile) {

    allFile.forEach(file => {

        fs.unlink(file, (error) => {
            if (error) {
                console.error(`${file} files doesnt exist`);
            } else {
                console.log(`file ${file} Deleted`);

            }
        });

    });
}