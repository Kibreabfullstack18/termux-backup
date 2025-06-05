/*const os = require('os');
console.log(os);
const freemem = os.freemem();
console.log("Free memory:", freemem);
const totalmem = os.totalmem();
console.log("Total Memory:", totalmem);
console.log("Used memo:", ((totalmem - freemem) / (1024 * 1024 * 1024)));

const platform = os.platform();
console.log("platform:", platform)
const core = os.endianness()
console.log(core)*/
/*
const fs = require('fs');
fs.readFile('/data/data/com.termux/files/home/CoreModule/abebe.txt','utf8', (err, data)=>{
if (err) throw err
else console.log(data);
});

const path = require('path');
console.log(path)

const pathOb = path.parse(__filename)
console.log(pathOb.name);

/*console.log(__filename)
console.log(__dirname)*/

    // const { readdir, readFile, writeFile, mkdir } = require("fs");
/*readdir("./bob", (err, files)=>{
if (err) console.log("error", err);
    else console.log(files);
});*/

   /* mkdir("./abebe/ayele/almaz", {recursive: true}, (err, path)=>{
  if (err) console.log("error", err)
        console.log(path)
    })*/


    /*readFile("abebe.txt", "utf8", (err, data)=>{
        if (err) throw err;
        console.log(data)
    })*/

    /*writeFile("abebe.txt", "Hi there How are you?", (err)=>{
        if (err) throw err;
        console.log("The File has been saved")
    })*/

    /*const events = require("events");
const e = require("express");
const eventEmmiter = new events.EventEmitter();

const myEventHandler = function() {
    console.log("abet selam new");
}

eventEmmiter.on("Abebe", myEventHandler)
eventEmmiter.emit("Abebe")*/



// const http = require('http');
// http.createServer(function (req, res){
// res.writeHead(200);
//  res.end('hello world\n');     
//  }).listen(8000);

// const { error } = require('console');
// const server = http.createServer(function(req, res) {
//     res.writeHead(200);
//     res.write("kaa ayyette")
//     res.end("\nHello There");
//     console.log("request recieved")
 // })
//  server.listen(7677, (err)=>{
// if (err) throw err;
//      else console.log("Listening")
//  });

 
// const server2 = http.createServer((req, res)=>{
//     console.log("requested path >>>", req.url)
//     if (req.url === "/") {
//         res.write("<h1>This is Home Page</h1>")
//         res.end()
//     }else if (req.url === "/about") {
//         res.write("<h1>This is About Page</h1>")
//         res.end()
//     }else
//         res.write("<h1>404 page not found</h1>")
//         res.end()
// })
//
// const PORT = 5000;
// server2.listen(PORT, ()=>{
//     console.log('Listening on port:http://localhost:${PORT}');
// })
//
// server2.on("error", ()=>{
//     console.log("error happend")
// })


const http = require('http');
const fs = require('fs')
const url = require('url');
const { log } = require('console');
//
// const app = http.createServer(function(req, res){
//     // console.log(req.url);
//     const parsedUrl = url.parse(req.url, true);
//     // console.log(parsedUrl)
//
//     let filePath = parsedUrl.path;
//     // console.log(filePath)
//
//     if (filePath == "/abebe.html") {
// console.log(__dirname)
// console.log(__filename)
//
//
// var requestedFile = __dirname + filePath;
//
// fs.readFile(requestedFile, function (err, content){
//     if (err) {
//         res.writeHead(404)
//         res.end()
//     }else {
//         res.writeHead(200, {"content-type":"text/html"})
//         res.end(content)
//     }
// }) 
// }else
//     res.write("Hello there");
//     res.end();
// });
//
// app.listen(2020, function(){
//     console.log("Listening on port:2020");
// });

// biruk kebede
// const serverMyStatic = http.createServer((req, res) => {
// let reqPath = req.url;
//     console.log("requestedPath >>>", reqPath)
//     if (reqPath === "/") {
//         reqPath = "/index.html"
//     }
//
//    let requestedFile = "/Phase1" + reqPath;
//
//     console.log("requestedFile >>>", requestedFile);
//
//     fs.readFile(requestedFile, (err, content) => {
//         if (err) {
//             requestedFile = "/Phase1/notFound.html";
//   fs.readFile(requestedFile, (err, content) => {
//      res.writeHead(404, {"content-type":"text/html"})
//       res.write(content)
//        res.end()
//             })
//         }else {
//             res.writeHead(200, {"content-type":"text/html"})
//             res.write(content)
//             res.end()
//         }
//     })
//
// })
//
// serverMyStatic.listen(2025, function(){
//     console.log("Listening on port:http://localhost:2025")
// })
//
let person = function (name, age){
    this.name = name;
    this.age = age;
}

let add = new person("adene", 23);
console.log(add);
