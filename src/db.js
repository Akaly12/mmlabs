import { MongoClient } from "mongodb"

const MongoClient = require("mongodb").MongoClient
MongoClient.connect("mongodb://localhost:3000",
    {useunifiledtopology: true},
    (error, connection) => {
        if(error) return console.log(error);
        global.connection = connection.db("sr");
    });