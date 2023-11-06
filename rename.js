const fs = require("fs");

// fs.renameSync("./lib/notes.md", "./notes.md", function(err) {
//     if (err) {
//         throw err;
//     }

//     console.log("Notes markdown file moved");
// })

// fs.unlinkSync("./lib/project-config.js");

fs.unlinkSync("notes.md", function(err) {
    if (err) {
        throw err;
    }

    console.log("Notes are gone");
});