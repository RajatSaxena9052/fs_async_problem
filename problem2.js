const fs = require("fs");

function problem2() {
    fs.readFile("./data/lipsum.txt", 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
        } else {

            fs.writeFile("newfile1.txt", data.toUpperCase(), "utf8", (error) => {
                if (error) {
                    console.error(error);
                }
                else {
                    fs.writeFile("filenames.txt", "newfile1.txt ", (error, data) => {
                        if (error) {
                            console.error(error);
                        } else {

                            fs.readFile("newfile1.txt", "utf8", (error, data) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    fs.writeFile("newfile2.txt", data.toLowerCase(), "utf8", (error) => {
                                        if (error) {
                                            console.error(error);
                                        } else {
                                            fs.writeFile("filenames.txt", "newfile2.txt ", { flag: 'a' }, (error) => {
                                                if (error) {
                                                    console.error(error);
                                                } else {
                                                    fs.readFile("newfile2.txt", "utf-8", (error, data) => {
                                                        if (error) {
                                                            console.error(error);
                                                        } else {
                                                            fs.writeFile("newfile3.txt", data, (error) => {
                                                                if (error) {
                                                                    console.error(error);
                                                                } else {
                                                                    fs.writeFile("filenames.txt", "newfile3.txt ", { flag: 'a' }, (error) => {
                                                                        if (error) {
                                                                            console.error(error);
                                                                        } else {

                                                                            fs.readFile("filenames.txt", "utf-8", (error, data) => {
                                                                                if (error) {
                                                                                    console.error(error);
                                                                                } else {
                                                                                    deleteFiles(data.split(" "));
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
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
problem2();

function deleteFiles(data) {
    data.forEach(fileName => {

        fs.unlink(fileName, (error) => {
            if (error) {
                console.error();
            } else {
                console.log(`file ${fileName} deleted`)
            }
        });

    });
}