// How to make  a server using Node js Http Module.
// importing http built in module for making server
const http = require("http");
const PORT = process.env.PORT || 5000;

const createServerCallBack = (req , res)=>{
    res.end("<h1>Har Har Mahadev</h1>")
}

// making server 
const server = http.createServer(createServerCallBack);

// listen Callback
const listenCallBack = (err)=>{
     console.log("Your server is running on the " + PORT + " Port" ) ;
}

// listening server
server.listen(PORT , listenCallBack);