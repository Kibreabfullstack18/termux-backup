console.log(module);
const express = require("express");

const app = express();

app.listen(3034, (err)=>{
if (err) throw err;
else console.log("listening on http:localhost:3034");
});

