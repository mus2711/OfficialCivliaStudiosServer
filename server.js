import express from "express";
import emaildata from "./emaildb.js";
import emailclient from "./emailsclient.js";
import insertcomments from "./commentdb.js";
import commentclient from "./commentclient.js";
// setting paths of databases with a variable, makes it easier to change
//databses quickly.
const buggydb = "./db/buggy.sqlite";
const cs19db = "./db/c19comments.sqlite";
const sleepdb = "./db/sleep.sqlite";
const stooldb = "./db/stool.sqlite";
const tabledb = "./db/tablecomments.sqlite";
// arrays that will be posted to clint, taken from databases
var buggyArrays = commentclient.init(buggydb);
var stoolArrays = commentclient.init(stooldb);
var sleepArrays = commentclient.init(sleepdb);
var c19Arrays = commentclient.init(cs19db);
var tableArrays = commentclient.init(tabledb)
var emailArray = emailclient.init();
const port = process.env.PORT || 8080;
const app = express();

//several paths set here dealing with POST and get calls from client
//individually.

app.use("/", express.static("cilviastudios"));
app.listen(port, function () {
    console.log("Listening to port " + port);
});
app.use(express.json({limit: "20mb"}));

app.get("/api", (request, response) => {
    response.json({emails: emailArray});
    //refresh array, this was done for emails and comments to ensure they
    //remained on website without need to refresh server.
    emailArray = emailclient.init();
});

app.post("/api", (request, response) => {
    console.log("I got an email.");
    console.log(request.body.subscriber);
    //insert email into database
    emaildata.init(request.body.subscriber);
    response.json({
        status: "subscribed",
        email: request.body.subscriber
    });
    emailArray = emailclient.init();
});

app.get("/buggy", (request, response) => {
    response.json({comments: buggyArrays});
    buggyArrays = commentclient.init(buggydb);
});

app.post("/buggy", (request, response) => {
    console.log("I got a comment");
    console.log(request.body);
    request.body.userName = request.body.userName.replace("'", "`");
    request.body.userFeedback = request.body.userFeedback.replace("'","`");
    //insert name and comment from client into database
    insertcomments.init(
        buggydb, request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    buggyArrays = commentclient.init(buggydb);
});

app.get("/stool", (request, response) => {
    response.json({comments: stoolArrays});
    stoolArrays = commentclient.init(stooldb);
});

app.post("/stool", (request, response) => {
    console.log("I got a comment");
    console.log(request.body);
    request.body.userName = request.body.userName.replace("'", "`");
    request.body.userFeedback = request.body.userFeedback.replace("'","`");
    insertcomments.init(
        stooldb, request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    stoolArrays = commentclient.init(stooldb);
});

app.get("/sleep", (request, response) => {
    response.json({comments: sleepArrays});
    sleepArrays = commentclient.init(sleepdb);
});

app.post("/sleep", (request, response) => {
    console.log("I got a comment");
    console.log(request.body);
    request.body.userName = request.body.userName.replace("'", "`");
    request.body.userFeedback = request.body.userFeedback.replace("'","`");
    insertcomments.init(
        sleepdb,request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    sleepArrays = commentclient.init(sleepdb);
});

app.get("/c19", (request, response) => {
    response.json({comments: c19Arrays});
    c19Arrays = commentclient.init(cs19db);
});

app.post("/c19", (request, response) => {
    console.log("I got a comment");
    console.log(request.body);
    request.body.userName = request.body.userName.replace("'", "`");
    request.body.userFeedback = request.body.userFeedback.replace("'","`");
    insertcomments.init(
        cs19db,request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    c19Arrays = commentclient.init(cs19db);
});

app.get("/table", (request, response) => {
    response.json({comments: tableArrays});
    tableArrays = commentclient.init(tabledb);
});

app.post("/table", (request, response) => {
    console.log("I got a comment");
    console.log(request.body);
    request.body.userName = request.body.userName.replace("'", "`");
    request.body.userFeedback = request.body.userFeedback.replace("'","`");
    insertcomments.init(
        tabledb,request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    tableArrays = commentclient.init(tabledb);
});