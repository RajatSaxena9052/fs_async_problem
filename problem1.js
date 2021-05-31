function problem1() {
    const fs = require("fs");
    fs.mkdir("./randomJSON", (error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log("directory named randomJSON is made");

            fs.writeFile("./randomJSON/1.txt", "hello from the other side", (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("files written to the randomJSON directory");

                    fs.writeFile("./randomJSON/2.txt", "hello from the other side 2", (error) => {
                        if (error) {
                            console.error(error);
                        } else {
                            console.log("files written to the randomJSON directory");

                            fs.writeFile("./randomJSON/3.txt", "hello from the other side 3 ", (error) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    console.log("files written to the randomJSON directory")
                                    
                                }
                            });
                        }
                    });

                }
            });
        }
    });
}
module.exports = problem1;