const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, 'test'), {}, (e) => {
//     if (e) throw e;

//     console.log('Folder created...')
// })

// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World!", (e) => {
//     if (e) throw e;

//     console.log('File added...')
// })

// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (e, data) => {
//     if (e) throw e;

//     console.log(data)
// })

fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname, "/test", "hello2.txt"),
    (e) => {
        if (e) throw e;
        console.log("file eranmed");
    }
);
