const fs = require("fs");

function problem2() {

    fs.readFile("./data/lipsum.txt", 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
        } else {

            let dataInUpperCase = data.toUpperCase()
            let newFile1 = "newfile1.txt";

            fs.writeFile(newFile1, dataInUpperCase + "\n", "utf8", (error) => {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log(`${newFile1} is created`);

                    fs.writeFile("filenames.txt", newFile1 + "\n", (error) => {
                        if (error) {
                            console.error(error);
                        } else {
                            console.log(`Added ${newFile1} to filenames.txt`);

                            fs.readFile(newFile1, "utf8", (error, data) => {
                                if (error) {
                                    console.error(error);
                                } else {

                                    let dataInLowerCase = data.toLowerCase();
                                    let dataInSentenceForm = dataInLowerCase.split(". ").join(".\n");
                                    let newFile2 = "newfile2.txt";

                                    fs.writeFile(newFile2, dataInSentenceForm, "utf8", (error) => {
                                        if (error) {
                                            console.error(error);
                                        } else {
                                            console.log(`${newFile2} is created`);

                                            fs.writeFile("filenames.txt", newFile2 + "\n", { flag: 'a' }, (error) => {
                                                if (error) {
                                                    console.error(error);
                                                } else {
                                                    console.log(`Added ${newFile2} to filenames.txt`);

                                                    fs.readFile(newFile2, "utf-8", (error, data) => {
                                                        if (error) {
                                                            console.error(error);
                                                        } else {

                                                            let sortedData = data.split("\n").sort().join("\n");
                                                            let newFile3 = "newfile3.txt";

                                                            fs.writeFile(newFile3, sortedData, (error) => {
                                                                if (error) {
                                                                    console.error(error);
                                                                } else {
                                                                    console.log(`${newFile3} is created`);

                                                                    fs.writeFile("filenames.txt", newFile3, { flag: 'a' }, (error) => {
                                                                        if (error) {
                                                                            console.error(error);
                                                                        } else {
                                                                            console.log(`Added ${newFile3} to filenames.txt`);

                                                                            fs.readFile("filenames.txt", "utf-8", (error, data) => {
                                                                                if (error) {
                                                                                    console.error(error);
                                                                                } else {
                                                                                    let allFileNames = data.split("\n");

                                                                                    deleteFiles(allFileNames);

                                                                                }
                                                                            });

                                                                        }
                                                                    });

                                                                }
                                                            });

                                                        }
                                                    });
                                                }

                                            });

                                        }
                                    });

                                }
                            });

                        }
                    });

                }
            });

        }
    });
}
module.exports = problem2;


function deleteFiles(allFileNames) {
    allFileNames.forEach(fileName => {
        console.log(fileName)
        fs.unlink(fileName, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log(`file ${fileName} deleted`);
            }
        });

    });

}