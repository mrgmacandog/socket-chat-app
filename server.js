const express = require("express");
const app = express();
// const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function() {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});